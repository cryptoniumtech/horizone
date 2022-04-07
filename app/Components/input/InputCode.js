import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Keyboard, TouchableOpacity, Platform} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import TextElement from '../text/Text';
import {Color, Constants} from '../../common';

const styles = StyleSheet.create({
    root: {paddingHorizontal: 10},
    title: {textAlign: 'center', fontSize: 30},
    codeFiledRoot: {marginTop: 20, marginBottom: 10},
    cell: {

        width: 45,
        height: 45,
        lineHeight: 45,
        fontSize: 24,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 6;

const App = ({onFulfill, onCodeChange}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        // getHash();
        if (Platform.OS==='android'){
        startListeningForOtp();}
        return () => {
            if (Platform.OS==='android'){
            RNOtpVerify.removeListener();}
        };
    }, []);
    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                onBlur={() => onFulfill(value)}
                ref={ref}
                {...props}
                value={value}
                onChangeText={(v) => {
                    onCodeChange(v);
                    setValue(v);}}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                autoFocus={true}
                renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor/> : null)}
                    </Text>
                )}
            />
            <TouchableOpacity style={{alignSelf:"flex-end",marginVertical:10}} onPress={()=>{setValue("")}}>
                <TextElement h4 h4Style={{
                    fontFamily: Constants.fontFamilyRegular,
                    color: Color.primary,
                }}>Clear</TextElement>
            </TouchableOpacity>
        </SafeAreaView>
    );

    function getHash() {
        RNOtpVerify.getHash()
            .then(s => {})
            .catch(console.log);
    }

    function startListeningForOtp() {
        RNOtpVerify.getOtp()
            .then(p => RNOtpVerify.addListener(otpHandler))
            .catch(p => console.log(p));
    }

    function otpHandler(message: string) {
        try {
            const otp = /(\d{6})/g.exec(message)[1];
            setValue(otp);
            RNOtpVerify.removeListener();
            Keyboard.dismiss();
        } catch (e) {

        }

    }

};

export default App;
