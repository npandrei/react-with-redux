import { connect } from 'react-redux';
import HomeEdit from '../components/home-edit.jsx';
import { homeContentChanged } from '../actions/actions.js';

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
        contentChanged: (value) => {
            dispatch(homeContentChanged(value));
        }
    }
}

// create the component
var HomeEditContainer = connect(mapStateToProps, mapDispatchToProps)(HomeEdit);

export default HomeEditContainer;