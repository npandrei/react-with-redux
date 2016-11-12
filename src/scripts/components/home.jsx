import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        let { text = '' } = this.props;
        if (text.length === 0) {
            text = 'no text defined. go and edit the text';
        }

        return (<div>
            <h1>Home</h1>
            <p>{text}</p>
        </div>);
    }
}

Home.propTypes = {
    text: PropTypes.string.isRequired
}

Home.contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
}

export default Home;