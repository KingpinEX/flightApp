
export const CHECK_LOGIN = "CHECK_LOGIN";
export const ADD_FLIGHT = "ADD_FLIGHT";

export const checkLogin = (user,password) => ({
    type: CHECK_LOGIN,
    user,
    password
});


export const addFlight = (flightData) => ({
    type: ADD_FLIGHT,
    flightData
});