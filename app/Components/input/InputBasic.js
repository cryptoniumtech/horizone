import React from 'react';
import {StyleSheet, TextInput, Platform, I18nManager} from 'react-native';
import fonts, {lineHeights, sizes} from '../config/fonts';
import {padding} from '../config/spacing';
import {Color, Constants} from '../../common';

const InputBasic = ({
  placeholderTextColor,
  style,
  multiline,
  numberOfLines,
  inputRef,
  ...rest
}) => {

  return (
        <TextInput
          {...rest}
          ref={inputRef}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : Color.accent
          }
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          style={[
            styles.input,
            {
              color: Color.blackTextPrimary,
              fontFamily:Constants.fontFamilyRegular
            },
            multiline && styles.inputMultiline,
            multiline && {
              height: numberOfLines * 20 + 2 * padding.base,
            },
            style && style,
          ]}
        />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    textAlignVertical: 'center',
    ...fonts.regular,
    ...Platform.select({
      android: {
        textAlign: I18nManager.isRTL ? 'right' : 'left',
      },
      ios: {
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      },
    }),
  },
  inputMultiline: {
    textAlignVertical: 'top',
    paddingVertical: padding.base,
  },
});

InputBasic.defaultProps = {
  autoCapitalize: 'none',
  underlineColorAndroid: 'transparent',
  numberOfLines: 3,
};

export default InputBasic;
