import {Modal, Platform, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {launchCamera, launchImageLibrary} from "react-native-image-picker";


export default function ImagePickerComponent({imagePickingState, setVisibility, onImagePick}) {


    function camerapiker() {

        var options = {

            title: 'Select Avatar',
            quality: 0.1,
            includeBase64: true,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
        };


        launchCamera(options, (response) => {


            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error:"), response.error;
            } else if (response.customButton) {
                console.log("User tapped custom button:"), response.customButton;
            } else {
                let imageData = {
                    name: response.fileName,
                    height: response.height,
                    width: response.width,
                    type: response.type,
                    uri: Platform.OS === 'android' ? response.uri : response.uri.replace('file://', '/private')
                }

                onImagePick(imageData)
            }
        });

    }

    function imagepiking() {

        var options = {

            title: 'Select Avatar',
            quality: 0.1,
            includeBase64: false,
            storageOptions: {
                skipBackup: true,
                path: 'images',

            },
        };

        launchImageLibrary(options, (response) => {


            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error:"), response.error;
            } else if (response.customButton) {
                console.log("User tapped custom button:"), response.customButton;
            } else {
                let imageData = {
                    name: response.fileName,
                    height: response.height,
                    width: response.width,
                    type: response.type,
                    uri: Platform.OS === 'android' ? response.uri : response.uri.replace('file://', '/private')
                }

                onImagePick(imageData)
            }
        });

    }


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={imagePickingState}
            onRequestClose={() => {
                setVisibility()
            }}
        >

            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundColor: 'rgba(0,0,0,0.22)'
            }}>
                <View style={{
                    backgroundColor: "#fff",
                    width: '95%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderRadius: 5
                }}>
                    <Text style={{
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontSize: 18,
                        color: 'black',
                        marginHorizontal: 10,
                        marginTop: 10
                    }}>Choose One</Text>
                    <TouchableOpacity
                        onPress={() => {
                            camerapiker()
                            setVisibility()
                        }}>
                        <Text style={{
                            color: "#97ce0a",
                            paddingHorizontal: 15,
                            paddingVertical: 7,
                        }}>Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {     setVisibility()

                            setTimeout(()=>{imagepiking()},500)


                        }}>
                        <Text style={{
                            color: "#0a89ce",
                            paddingHorizontal: 15,
                            paddingVertical: 7,
                        }}>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setVisibility()
                        }}>
                        <Text style={{
                            color: "red",
                            paddingHorizontal: 15,
                            paddingVertical: 7,
                        }}>cancel</Text>
                    </TouchableOpacity>


                </View>
            </View>

        </Modal>
    )

}
