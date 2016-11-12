import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';


class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (<div>
            Content
        </div>);
    }
}

App.propTypes = {
}

App.contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
}

export default App;