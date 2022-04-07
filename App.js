import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import store from './app/store/configureStore';
import AppContainer from './app/navigation/index'
import Router from './app/Router'
import FlashMessage from "react-native-flash-message";
import ReactNative from "react-native";
class App extends React.Component {
    state = { appIsReady: false };
constructor(props) {
    super(props);
    try {
        ReactNative.I18nManager.allowRTL(false);
    } catch (e) {
        console.log(e);
    }
}
    render() {
        const persistor = persistStore(store);
        return (
            // Provider makes the redux store and provide state to components by connect function.
            <Provider store={store}>

                {/*PersistGate get data from storage and intialize to state*/}
                <Router/>
                {/*<PersistGate loading={<AppContainer/>} persistor={persistor}>*/}
                {/*   */}
                {/*</PersistGate>*/}
            </Provider>
        );
    }
};


export default App;
