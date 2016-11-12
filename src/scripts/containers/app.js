import { connect } from 'react-redux';
import App from '../components/app.jsx';

// pass the store properties to the component 
const mapStateToProps = function (store) {
    return { 
    };
}

// attach the handlers
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

// create the component
var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;