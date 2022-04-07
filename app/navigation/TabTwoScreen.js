import React from 'react'
import TabTwContainer from '../container/TabTwoContainer';

class TabTwoScreen extends React.Component{

    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle:"Home"
        });
    }

    render() {
        return <TabTwContainer {...this.props} />;
    }

}

export default TabTwoScreen;
