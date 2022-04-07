import memoize from "lodash.memoize";
import I18n from "react-native-i18n";

const React = require("react-native");
var {
    AppRegistry,
    Dimensions
} = React;


 const strings = memoize(
    (key, config) => I18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key)
);



const   BASE_URL='http://venuec.citizenexpress.pk/api/';
const theme_color="#0F6FB4";
const darktheme_color='#FD3554';
const text_color='#878a8e';
const light_blue='#cad5e5';
const dark_black='#6d6b6c';
const orange='#F24E1E';
const text_grey='#a89797';
const yellow='rgba(227,170,81,0.91)';


const SEGOEUIBold="SEGOEUI";
const SEGOEUI="SEGOEUI";





exports.theme_color=theme_color;
exports.darktheme_color=darktheme_color;
exports.text_color=text_color;
exports.dark_black=dark_black;
exports.light_blue=light_blue;
exports.orange=orange;
exports.yellow=yellow;
exports.text_grey=text_grey;
exports.SEGOEUI=SEGOEUI;
exports.SEGOEUIBold=SEGOEUIBold;
exports.strings=strings;
exports.BASE_URL=BASE_URL;
