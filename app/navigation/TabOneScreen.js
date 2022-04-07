import React from 'react'
import TabOneContainer from '../container/TabOneContainer';

class TabOneScreen extends React.Component{

    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle:"Home"
        });
    }

    render() {
        return <TabOneContainer {...this.props} />;
    }

}

export default TabOneScreen;
