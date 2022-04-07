import React, {Component} from 'react';
import {StyleSheet, Image, Modal, View, FlatList, Text, TouchableOpacity, Platform, TextInput} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import ViewLabel, {MIN_HEIGHT} from '../ViewLabel';
import {padding} from '../config/spacing';
import {Color, Constants} from "../../../common";
import TextElement from "../text/Text";
import * as Animatable from "react-native-animatable";
import IonIcon from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

class InputMobile extends Component {
    constructor() {
        super();
        this.state = {
            isModalCountry: false,
            pickerData: [],
            search: '',
            placeholder: '',
        };
    }

    componentDidMount() {
        const list= this.phone.getPickerData();
        this.setState({
            pickerData: list,
            placeholder: `+${this.phone.getCountryCode()}`,
        });
    }

    onPressFlag = () => {
        this.setState({
            isModal: true,
        });
    };
    changeCountry = country => {
        this.phone.selectCountry(country.iso2);
        this.changePhone("")
        this.setState(
            {
                isModal: false,
                placeholder: country.dialCode,
            },
            () => {
                    this.changePhone(this.props.value);
            });
    };
    changePhone = value => {
        const {onChangePhoneNumber,} = this.props;

        if (onChangePhoneNumber) {
            onChangePhoneNumber({
                value,
                code:  this.phone.getISOCode(),
            });
        }

    };
    updateSearch = search => {
        this.setState({search});
    };

    render() {
        const {
            label,
            error,
            style,
            value,
            textStyle,
            flagStyle,
            textProps,
            theme,
            t,
            ...rest
        } = this.props;
        const {pickerData, search, placeholder} = this.state;
        const dataCountry = pickerData.filter(country => country.label.toLowerCase().indexOf(search.toLowerCase()) >= 0);

        return (
            <View style={styles.container}>
                <ViewLabel label={label} error={error} isHeading>
                    <PhoneInput
                        value={value===""?placeholder:value}
                        style={StyleSheet.flatten([styles.input, style && style])}
                        textStyle={{
                            color: Color.blackTextPrimary,
                            fontFamily:Constants.fontFamilyRegular
                        }}
                        flagStyle={StyleSheet.flatten([
                            styles.flag,
                            flagStyle && flagStyle,
                        ])}
                        {...rest}
                        textProps={{
                            placeholder:this.state.placeholder,
                            placeholderTextColor: Color.lightgrey,
                            ...textProps,
                        }}
                        onChangePhoneNumber={this.changePhone}
                        ref={reff => {
                            this.phone = reff;
                            this.props.reff(reff)
                        }}
                        onPressFlag={this.onPressFlag}
                    />
                </ViewLabel>
                {this.state.isModal?
                <Modal
                    visible={this.state.isModal}
                    setModalVisible={() => this.setState({isModal: false})}
                    ratioHeight={0.7}>
                    <View>
                        <SearchPlaceHolder
                            onClear={() => {
                                this.setState({searchClicked: false, search: ''})
                            }}
                            query={this.state.search}
                            onBack={() => {
                                this.setState({isModal: false, search: ''})
                            }} value={this.state.search}
                            onChangeText={this.updateSearch}

                         title={t("auth:search")} placeholder={t("auth:searchCountry")}
                        />
                        {dataCountry && dataCountry.length > 0 ? (
                            <FlatList
                                data={dataCountry}
                                renderItem={({item}) => (
                                    <TouchableOpacity onPress={() => this.changeCountry(item)} style={{
                                        flexDirection: "row",
                                        minHeight: 52,
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                        paddingVertical: 8,
                                        borderTopColor:Color.lightgrey,
                                        borderTopWidth: StyleSheet.hairlineWidth,
                                        addingHorizontal: padding.large
                                    }}>
                                        <Image
                                            source={item.image}
                                            resizeMode="stretch"
                                            style={styles.flag}
                                        />
                                        <TextElement h5 h5Style={{
                                            fontFamily: Constants.fontFamilyRegular,
                                            marginLeft: 20
                                        }}>{`(${item.dialCode})${item.label}`}</TextElement>
                                    </TouchableOpacity>
                                )}
                                initialNumToRender={15}
                                keyExtractor={item => item.key.toString()}
                            />
                        ) : null}
                    </View>
                </Modal>:null}
            </View>
        );
    }
}

const SearchPlaceHolder = ({onBack, placeholder, query, onChangeText, onClear}) => {
    return (
        <Animatable.View animation={"fadeInDown"}

                         style={{
                             justifyContent: 'space-between',
                             width: undefined,
                             alignItems: 'center',
                             backgroundColor: 'white',
                             shadowColor: "#000",
                             shadowOffset: {
                                 width: 0,
                                 height: 6,
                             },
                             zIndex: 3,
                             overflow: 'visible',
                             shadowOpacity: 0.07,
                             shadowRadius: 7.49,
                             elevation: 12

                         }}
        >


            <View style={{
                paddingHorizontal: 5,
                flexDirection: 'row',
                marginVertical: 10,
                alignItems: "center",
                marginHorizontal: 20
            }}>

                <IonIcon name="ios-arrow-back" size={28} color={Color.primary}
                         style={{}}
                         onPress={onBack}/>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 5,
                    marginLeft: 20,
                    backgroundColor: 'rgba(92, 88, 88, .05)',
                    paddingHorizontal: 5,
                    borderRadius: 7,
                }}>
                    <TextInput placeholder={placeholder} value={query} onChangeText={(text) => onChangeText(text)}
                               style={{
                                   flex: 1,
                                   justifyContent: "center",
                                   alignItems: "center",
                                   padding: 10,
                                   // includeFontPadding:false,
                                   // fontFamily:globals.medium,
                                   marginRight: 10,
                                   paddingHorizontal: 20,
                               }}/>

                    {query != "" ?
                        <TouchableOpacity onPress={onClear}>
                            <Octicons name="x" size={18} color={"#000"} style={{marginRight: 10}}
                            />
                        </TouchableOpacity> : null
                    }
                </View>
            </View>
        </Animatable.View>

    );
}
let styles = StyleSheet.create({
    input: {
        height: MIN_HEIGHT,
        paddingHorizontal: padding.large,
    },
    flag: {
        width: 30,
        height: 20,
        borderWidth: 0,
    },
    item: {
        paddingHorizontal: padding.large,
    },
    search: {
        paddingVertical: 0,
        paddingBottom: padding.small,
        paddingHorizontal: 20,
    },
});

InputMobile.defaultProps = {
    // initialCountry: 'sa',
    offset: padding.base,
};

export default InputMobile;
