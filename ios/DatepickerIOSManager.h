//
//  DatepickerIOSManager.h
//  ReactNativeStarterKit
//
//  Created by dotography on 11/8/2559 BE.
//  Copyright © 2559 Facebook. All rights reserved.
// DatepickerIOSManager

#import "RCTViewManager.h"
#import "RCTConvert.h"

@interface RCTConvert(UIDatePicker)

+ (UIDatePickerMode)UIDatePickerMode:(id)json;

@end

@interface DatepickerIOSManager : RCTViewManager

@end
