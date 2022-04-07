import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Entypo"
import InputBasic from './InputBasic';
import ViewLabel, {MIN_HEIGHT} from '../ViewLabel';
import {padding, margin} from '../config/spacing';
import {Color, Constants} from '../../../common';
import TextElement from '../text/Text';

class TouchableInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      label,
      error,
      secureTextEntry,
      style,
        value,
      multiline,
      iconName,
      onPress,
        placeHolder,
    } = this.props;
    return (
      <ViewLabel label={label} error={error} isHeading={true}>
        <TouchableOpacity onPress={()=>{onPress()}} style={styles.viewInput}>
          <View style={{flexDirection:"row",paddingHorizontal:20,alignItems:"center"}}>
           <Icon
            name={iconName}
            color={Color.primary}
            size={15}
            style={styles.icon}/>
            <TextElement h5Style={{fontFamily:value?Constants.fontFamilyMedium:Constants.fontFamilyRegular}} h5>{value??placeHolder}</TextElement>
          </View>
        </TouchableOpacity>
       </ViewLabel>
    );
  }
}

const styles = StyleSheet.create({
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: padding.large,
  },
  viewIcon: {
    marginRight: margin.large,
  },
  icon: {
    paddingVertical: padding.base,
    marginRight: margin.large,

  },
});

export default TouchableInput;
