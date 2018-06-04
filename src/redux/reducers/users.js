import {CHECK_LOGIN} from "../actions";

const users = (state = false, action) => {
    switch (action.type) {
        case CHECK_LOGIN:
            if(!(action.user === "user" && action.password === "password")){
                alert(`Wrong user name or password`);
            }
            return (action.user === "user" && action.password === "password");
        default:
            return state;
    }
};

export default users;