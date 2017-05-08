//
//  GetImagefromContact.m
//  version036
//
//  Created by dotography on 11/4/2559 BE.
//  Copyright © 2559 Facebook. All rights reserved.
//

#import "GetImagefromContact.h"
#import <AddressBook/AddressBook.h>
#import <UIKit/UIKit.h>


@implementation GetImagefromContact

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getAll:(RCTResponseSenderBlock) callback)
{
  ABAddressBookRef addressBookRef = ABAddressBookCreateWithOptions(NULL, nil);
  int authStatus = ABAddressBookGetAuthorizationStatus();
  if(authStatus != kABAuthorizationStatusAuthorized){
    ABAddressBookRequestAccessWithCompletion(addressBookRef, ^(bool granted, CFErrorRef error) {
      if(granted){
        [self retrieveContactsFromAddressBook:addressBookRef withCallback:callback];
      }else{
        NSDictionary *error = @{
                                @"type": @"permissionDenied"
                                };
        callback(@[error, [NSNull null]]);
      }
    });
  }
  else{
    [self retrieveContactsFromAddressBook:addressBookRef withCallback:callback];
  }
}

-(void) retrieveContactsFromAddressBook:(ABAddressBookRef)addressBookRef
                           withCallback:(RCTResponseSenderBlock) callback
{
  NSArray *allContacts = (__bridge_transfer NSArray *)ABAddressBookCopyArrayOfAllPeopleInSourceWithSortOrdering(addressBookRef, NULL, kABPersonSortByLastName);
  int totalContacts = (int)[allContacts count];
  int currentIndex = 0;
  int maxIndex = --totalContacts;
  
  NSMutableArray *contacts = [[NSMutableArray alloc] init];
  
  while (currentIndex <= maxIndex){
    NSDictionary *contact = [self dictionaryRepresentationForABPerson: (ABRecordRef)[allContacts objectAtIndex:(long)currentIndex]];
    
    if(contact){
      [contacts addObject:contact];
    }
    currentIndex++;
  }
  callback(@[[NSNull null], contacts]);
}

-(NSDictionary*) dictionaryRepresentationForABPerson:(ABRecordRef) person
{
  NSMutableDictionary* contact = [NSMutableDictionary dictionary];
  
  NSNumber *recordID = [NSNumber numberWithInteger:(ABRecordGetRecordID(person))];
  NSString *givenName = (__bridge_transfer NSString *)(ABRecordCopyValue(person, kABPersonFirstNameProperty));
  NSString *familyName = (__bridge_transfer NSString *)(ABRecordCopyValue(person, kABPersonLastNameProperty));
  NSString *middleName = (__bridge_transfer NSString *)(ABRecordCopyValue(person, kABPersonMiddleNameProperty));
  
  [contact setObject: recordID forKey: @"recordID"];
  
  BOOL hasName = false;
  if (givenName) {
    [contact setObject: givenName forKey:@"givenName"];
    hasName = true;
  }
  
  if (familyName) {
    [contact setObject: familyName forKey:@"familyName"];
    hasName = true;
  }
  
  if(middleName){
    [contact setObject: (middleName) ? middleName : @"" forKey:@"middleName"];
  }
  
  if(!hasName){
    //nameless contact, do not include in results
    return nil;
  }
  
  //handle phone numbers
  NSMutableArray *phoneNumbers = [[NSMutableArray alloc] init];
  
  ABMultiValueRef multiPhones = ABRecordCopyValue(person, kABPersonPhoneProperty);
  for(CFIndex i=0;i<ABMultiValueGetCount(multiPhones);i++) {
    CFStringRef phoneNumberRef = ABMultiValueCopyValueAtIndex(multiPhones, i);
    CFStringRef phoneLabelRef = ABMultiValueCopyLabelAtIndex(multiPhones, i);
    NSString *phoneNumber = (__bridge_transfer NSString *) phoneNumberRef;
    NSString *phoneLabel = (__bridge_transfer NSString *) ABAddressBookCopyLocalizedLabel(phoneLabelRef);
    if(phoneNumberRef){
      CFRelease(phoneNumberRef);
    }
    if(phoneLabelRef){
      CFRelease(phoneLabelRef);
    }
    NSMutableDictionary* phone = [NSMutableDictionary dictionary];
    [phone setObject: phoneNumber forKey:@"number"];
    [phone setObject: phoneLabel forKey:@"label"];
    [phoneNumbers addObject:phone];
  }
  
  [contact setObject: phoneNumbers forKey:@"phoneNumbers"];
  //end phone numbers
  
  //handle emails
  NSMutableArray *emailAddreses = [[NSMutableArray alloc] init];
  
  ABMultiValueRef multiEmails = ABRecordCopyValue(person, kABPersonEmailProperty);
  for(CFIndex i=0;i<ABMultiValueGetCount(multiEmails);i++) {
    CFStringRef emailAddressRef = ABMultiValueCopyValueAtIndex(multiEmails, i);
    CFStringRef emailLabelRef = ABMultiValueCopyLabelAtIndex(multiEmails, i);
    NSString *emailAddress = (__bridge_transfer NSString *) emailAddressRef;
    NSString *emailLabel = (__bridge_transfer NSString *) ABAddressBookCopyLocalizedLabel(emailLabelRef);
    if(emailAddressRef){
      CFRelease(emailAddressRef);
    }
    if(emailLabelRef){
      CFRelease(emailLabelRef);
    }
    NSMutableDictionary* email = [NSMutableDictionary dictionary];
    [email setObject: emailAddress forKey:@"email"];
    [email setObject: emailLabel forKey:@"label"];
    [emailAddreses addObject:email];
  }
  //end emails
  
  [contact setObject: emailAddreses forKey:@"emailAddresses"];
  
  [contact setObject: [self getABPersonThumbnailFilepath:person] forKey:@"thumbnailPath"];
  
  return contact;
}

-(NSString *) getABPersonThumbnailFilepath:(ABRecordRef) person
{
  if (ABPersonHasImageData(person)){
    CFDataRef photoDataRef = ABPersonCopyImageDataWithFormat(person, kABPersonImageFormatThumbnail);
    if(!photoDataRef){
      return @"";
    }
    
    NSData* data = (__bridge_transfer NSData*)photoDataRef;
    NSString* img64 = [self base64forData:data];
    return img64;
  }
  return @"";
}

-(NSString *)base64forData:(NSData*)theData {
  const uint8_t* input = (const uint8_t*)[theData bytes];
  NSInteger length = [theData length];
  
  static char table[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  
  NSMutableData* data = [NSMutableData dataWithLength:((length + 2) / 3) * 4];
  uint8_t* output = (uint8_t*)data.mutableBytes;
  
  NSInteger i;
  for (i=0; i < length; i += 3) {
    NSInteger value = 0;
    NSInteger j;
    for (j = i; j < (i + 3); j++) {
      value <<= 8;
      
      if (j < length) {
        value |= (0xFF & input[j]);
      }
    }
    
    NSInteger theIndex = (i / 3) * 4;
    output[theIndex + 0] =                    table[(value >> 18) & 0x3F];
    output[theIndex + 1] =                    table[(value >> 12) & 0x3F];
    output[theIndex + 2] = (i + 1) < length ? table[(value >> 6)  & 0x3F] : '=';
    output[theIndex + 3] = (i + 2) < length ? table[(value >> 0)  & 0x3F] : '=';
  }
  
  return [[NSString alloc] initWithData:data encoding:NSASCIIStringEncoding];
}

@end
