import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

class HomeEdit extends React.Component {
    constructor() {
        super();
        this.state = { content: '' };
    }

    componentDidMount() {
        const { text = '' } = this.props;
        this.setState(Object.assign({}, this.state, { content: text }));
    }

    

    render() {
        const { contentChanged } = this.props;

        const setContent = (content) => {
            this.setState(Object.assign({}, this.state, { content }));
        };

        return (<div>
            <h1>Home Edit</h1>
            <div>
                <textarea value={this.state.content} onChange={ (event) => { setContent(event.target.value); } }></textarea>
            </div>
            <button onClick={() => contentChanged(this.state.content) } className="btn btn-default">Save</button>
        </div>);
    }
}

HomeEdit.propTypes = {
    text: PropTypes.string.isRequired,
    contentChanged: PropTypes.func.isRequired
}

HomeEdit.contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
}

export default HomeEdit;