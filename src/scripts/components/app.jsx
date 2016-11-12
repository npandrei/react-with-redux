import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Link } from 'react-router';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        const { value } = this.props;

        return (<div>
            <h1>Demo app</h1>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div>
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to='/home'>Home</Link></li>
                            <li><Link to='/home-edit'>Edit</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>{this.props.children}</div>
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