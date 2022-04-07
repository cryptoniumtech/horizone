import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage';

Reactotron
    .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({ localhost: '192.168.43.11' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!
