import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'
import { Constants } from '../../common'
import Color from "../../common/Color";


const TextElement = props => {


  const {
    style,
    children,
    medium,
    light,
    bold,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    h5Style,
    h6Style,
    colorSecondary,
    colorThird,
    primary,
    secondary,
    third,
    ...rest
  } = props

  return (

    <Text
      style={StyleSheet.flatten([
        { color: Color.textColor },
        styles.text,
        StyleSheet.flatten([primary, style]),
        colorSecondary && secondary,
        colorThird && third,
        h1 &&
          StyleSheet.flatten([
            {
              fontSize: Constants.sizes.h1,
              lineHeight: Constants.lineHeights.h1,
              fontFamily: Constants.fontFamilyMedium
            },
            h1Style
          ]),
        h2 &&
          StyleSheet.flatten([
            {
              fontSize: Constants.sizes.h2,
              lineHeight: Constants.lineHeights.h2,
              fontFamily: Constants.fontFamilyMedium
            },
            h2Style
          ]),
        h3 &&
          StyleSheet.flatten([
            {
              fontSize: Constants.sizes.h3,
              lineHeight: Constants.lineHeights.h3,
              fontFamily: Constants.fontFamilyMedium
            },
            h3Style
          ]),
        h4 &&
          StyleSheet.flatten([
            {
              fontSize: Constants.sizes.h4,
              lineHeight: Constants.lineHeights.h4,
              fontFamily: Constants.fontFamilyMedium
            },
            h4Style
          ]),
        h5 &&
          StyleSheet.flatten([
            {
              fontSize: Constants.sizes.h5,
              lineHeight: Constants.lineHeights.h5,
              fontFamily: Constants.fontFamilyRegular
            },
            h5Style
          ]),
        h6 &&
          StyleSheet.flatten([
            {
              fontSize: Constants.sizes.h6,
              lineHeight: Constants.lineHeights.h6,
              fontFamily: Constants.fontFamilyRegular
            },
            h6Style
          ]),
        light && styles.light,
        medium && styles.medium,
        bold && styles.bold
      ])}
      {...rest}
    >
      {children}
    </Text>
  )
}

TextElement.propTypes = {
  style: Text.propTypes.style,
  medium: PropTypes.bool,
  light: PropTypes.bool,
  bold: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  colorSecondary: PropTypes.bool,
  colorThird: PropTypes.bool,
  h1Style: Text.propTypes.style,
  h2Style: Text.propTypes.style,
  h3Style: Text.propTypes.style,
  h4Style: Text.propTypes.style,
  h5Style: Text.propTypes.style,
  h6Style: Text.propTypes.style,
  primary: Text.propTypes.style,
  secondary: Text.propTypes.style,
  children: PropTypes.node
}

TextElement.defaultProps = {
  medium: false,
  light: false,
  bold: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  colorSecondary: false,
  colorThird: false,
  style: {},
  h1Style: {},
  h2Style: {},
  h3Style: {},
  h4Style: {},
  h5Style: {},
  h6Style: {},
  children: ''
}

const styles = StyleSheet.create({
  text: {
    fontSize: Constants.sizes.base,
    // lineHeight: lineHeights.base,
    textAlign: 'left',
    includeFontPadding: false

  }
})
export default TextElement
