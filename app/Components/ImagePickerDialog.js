import React, {useContext} from 'react'
import {Modal, PermissionsAndroid, Platform, StyleSheet, TouchableOpacity, View} from 'react-native'
import Icons from 'react-native-vector-icons/dist/AntDesign'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {CardBackground} from "./Card";
import TextElement from "./text/Text";
import {Constants} from "../common";
import {toast} from "../Omni";
import {scale} from "../common/ScalingUtils";


const options = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
    quality: 0.5,
    cameraType: 'back',
    includeBase64: false,
    saveToPhotos: false

}
const ImagePickerDialog = ({ isModalVisible, setModalVisibility, onImagePic }) => {

    const requestCameraPermission = async () => {
        try {
            if (Platform.OS==='android'){
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return true
                } else {
                    toast("Camera permission denied");
                    return false
                }
            }else{
                return true
            }

        } catch (err) {
            console.warn(err);
        }
    };

    const pickImageFromCamera = async () => {
        if(await requestCameraPermission()){
            launchCamera(options, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker')
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error)
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton)
                } else {

                    if (response.assets && response.assets.length > 0) {
                        const value = response.assets[0]
                        if (value) {
                            value.uri = Platform.OS == 'ioss' ? value.uri.replace('file://', '/private') : value.uri
                            value.name = value.fileName
                            onImagePic(value)
                        } else {
                            toast('Something went wrong, please try again')
                        }
                        setModalVisibility(false)
                    } else {
                        if (response.errorMessage) {
                            toast(response.errorMessage)

                        } else {
                            toast('Something went wrong, please try again')

                        }
                    }

                }
            })
        }


    }

    const pickImageFromGallery = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {

                if (response.assets&&response.assets.length>0){
                    const value = response.assets[0]
                    if (value) {

                        value.uri = Platform.OS == 'ioss' ?value.uri.replace('file://', '/private') : value.uri
                        value.name = value.fileName
                        onImagePic(value)
                    } else {
                        toast('Something went wrong, please try again')
                    }
                    setModalVisibility(false)
                }else{
                    toast('Something went wrong, please try again')
                }

            }
        })
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
                setModalVisibility(isModalVisible)
            }}>
            <View style={{
                flex: 1,
                flexGrow: 1,
                flexDirection: 'row',
                backgroundColor: 'rgba(0,0,0,0.5)',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 40
            }}>
                <CardBackground isForground={true} outerstyles={{
                    padding: 20,
                    width: 0,
                    flexGrow: 1,
                    flex: 1,
                    borderRadius: 20
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icons name="closecircleo" size={20} color={'#000'} style={{ margin: 2, marginRight: 20 }}
                               onPress={() => {
                                   setModalVisibility(isModalVisible)
                               }}/>
                        <TextElement style={styles.heading}>Select Image</TextElement>
                    </View>
                    <TouchableOpacity onPress={() => pickImageFromCamera()}>
                        <TextElement style={styles.title}>Take Photo</TextElement>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => pickImageFromGallery()}>
                        <TextElement style={styles.title}>Choose from Library</TextElement>
                    </TouchableOpacity>
                </CardBackground>
            </View>
        </Modal>
    )
}

export default ImagePickerDialog

const styles = StyleSheet.create({
    heading: {
        fontFamily: Constants.fontFamilyMedium,
        fontSize: scale(18),
        includeFontPadding: false
    },
    title: {
        fontFamily: Constants.fontFamilyMedium,
        fontSize: scale(13),
        marginTop: 15,
        includeFontPadding: false
    }
})
