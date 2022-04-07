import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputBasic from './InputBasic';
import ViewLabel, {MIN_HEIGHT} from '../ViewLabel';
import {margin, padding} from '../config/spacing';
import {Color, Constants} from "../../../common";
import {scale} from "../../../ScalingUtils";

class InputVerify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSecure: props.secureTextEntry,
            isHeading: props.value || props.defaultValue,
        };
        this.input = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                isHeading: this.props.value,
            });
        }
    }

    handleFocus = data => {
        this.setState({isHeading: true});
        if (this.props.onFocus) {
            this.props.onFocus(data);
        }
    };
    onChange = value => {
        this.setState(
            {
                value,
            },
            () => {
                if (this.props.onChangeText) {
                    this.props.onChangeText(value);
                }
            },
        );
    };
    handleBlur = data => {
        const {isHeading} = this.state;
        this.setState({isHeading: isHeading || (!this.input.current && this.input.current._lastNativeText)});
        if (this.props.onBlur) {
            this.props.onBlur(data);
        }
    };

    render() {
        const {
            label,
            error,
            secureTextEntry,
            style,
            multiline,
          verify,
            btnName,
            ...rest
        } = this.props;
        const {isSecure, isHeading} = this.state;
        return (
            <ViewLabel label={label} error={error} isHeading={isHeading}>
                <View style={styles.viewInput}>
                    <InputBasic
                        {...rest}
                        inputRef={this.input}
                        testID="RN-text-input"
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        secureTextEntry={isSecure}
                        multiline={multiline}
                        style={[
                            this.props.editable === false && {backgroundColor: "rgba(184, 180, 182, .36)"},
                            styles.input,
                            !multiline && {
                                height: MIN_HEIGHT,
                            },
                            style && style,
                        ]}
                    />
                    <TouchableOpacity style={{}} onPress={verify}>
                        <Text style={styles.primayText}>{btnName??'Verify'}</Text>
                    </TouchableOpacity>

                </View>
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
    primayText: {
        fontFamily: Constants.fontFamilyMedium,
        fontSize: scale(12),
        includeFontPadding: false,
        color: Color.primary,
        marginEnd: 20
    }
});



export default InputVerify;
