import React, {Fragment} from 'react';
import LoginForm from "../components/LoginForm";
import {addFlight, checkLogin} from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FlightListPage from "./FlightListPage";

class LoginPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {flights,addFlight,checkLogin} = this.props;

        if(this.props.users){
            return <FlightListPage flights={flights} addFlight={addFlight} />
        }

        return (
            <Fragment>
                <h1>Welcome to FlisghtApp</h1>
                <h3>please login:</h3>
                <LoginForm checkSubmit={checkLogin}/>
            </Fragment>
        );
    }
}

// this is for props
const mapStateToProps = (state) => ({
    users: state.users,
    flights: state.flights,
});

// this is for actions ( action creators )
const mapDispatchToProps = (dispatch) => bindActionCreators({
    checkLogin,
    addFlight,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);