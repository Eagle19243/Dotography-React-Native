//
//  DatepickerIOS.m
//  ReactNativeStarterKit
//
//  Created by dotography on 11/8/2559 BE.
//  Copyright © 2559 Facebook. All rights reserved.
//

#import "DatepickerIOS.h"
#import "RCTUtils.h"
#import "UIView+React.h"

@interface DatepickerIOS ()

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end

@implementation DatepickerIOS

- (instancetype)initWithFrame:(CGRect)frame
{
  if ((self = [super initWithFrame:frame])) {
    [self addTarget:self action:@selector(didChange)
   forControlEvents:UIControlEventValueChanged];
  NSLog(@"RTCDatePicker current locale = %@", self.locale.localeIdentifier);
    self.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_UK"]; //fm_FM
//    NSLog(@"RTCDatePicker new locale = %@", self.locale.localeIdentifier);
    self.calendar = [[NSCalendar alloc] initWithCalendarIdentifier:NSCalendarIdentifierGregorian];     
    //    [self.calendar setLocale:self.locale];
    
  }
  return self;
}

RCT_NOT_IMPLEMENTED(- (instancetype)initWithCoder:(NSCoder *)aDecoder)

- (void)didChange
{
  if (_onChange) {
    _onChange(@{ @"timestamp": @(self.date.timeIntervalSince1970 * 1000.0) });
  }
}

@end
