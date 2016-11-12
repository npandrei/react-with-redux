import { connect } from 'react-redux';
import Home from '../components/home.jsx';

// pass the store properties to the component 
const mapStateToProps = function (store) {
    const { content = {} } = store;
    const { home = '' } = content;

    return {
        text: home
    };
}

// attach the handlers
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

// create the component
var HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;