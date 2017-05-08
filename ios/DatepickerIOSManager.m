//
//  DatepickerIOSManager.m
//  ReactNativeStarterKit
//
//  Created by dotography on 11/8/2559 BE.
//  Copyright © 2559 Facebook. All rights reserved.
//

#import "DatepickerIOSManager.h"

#import "RCTBridge.h"
#import "DatepickerIOS.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"

@implementation RCTConvert(UIDatePicker)

RCT_ENUM_CONVERTER(UIDatePickerMode, (@{
                                        @"time": @(UIDatePickerModeTime),
                                        @"date": @(UIDatePickerModeDate),
                                        @"datetime": @(UIDatePickerModeDateAndTime),
                                        @"countdown": @(UIDatePickerModeCountDownTimer), // not supported yet
                                        }), UIDatePickerModeTime, integerValue)

@end

@implementation DatepickerIOSManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [DatepickerIOS new];
}

RCT_EXPORT_VIEW_PROPERTY(date, NSDate)
RCT_EXPORT_VIEW_PROPERTY(minimumDate, NSDate)
RCT_EXPORT_VIEW_PROPERTY(maximumDate, NSDate)
RCT_EXPORT_VIEW_PROPERTY(minuteInterval, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)
RCT_REMAP_VIEW_PROPERTY(mode, datePickerMode, UIDatePickerMode)
RCT_REMAP_VIEW_PROPERTY(timeZoneOffsetInMinutes, timeZone, NSTimeZone)

@end
