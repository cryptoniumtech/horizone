import {Languages,Images} from './index';

export default class Tools {


  static uploadImageRequest = (imageUri, accessToken) => {

    try {
      if (imageUri && imageUri.uri && imageUri.uri != "") {
        let array = imageUri.uri.split("/");
        const imageparms = {
          uri: imageUri.uri,
          type: 'image/jpeg',
          name: array[array.length - 1],
        };
        var data = new FormData();
        data.append("image", JSON.stringify(imageparms));
        console.log(data);
        const request = RestApi.getInstance().post("user/upload/image", data, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        });
        console.log(request)
        return request;
      } else {
        return false;
      }

    } catch (e) {
      // alert(JSON.stringify(e))
    }

  }

}
