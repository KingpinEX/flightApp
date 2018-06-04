import {ADD_FLIGHT} from "../actions";

const flights = (state = flightsData, action) => {
    switch (action.type) {
        case ADD_FLIGHT:
            return  [
                ...state,
                action.flightData,
            ];
        default:
            return state;
    }
};

export default flights;

const flightsData = [
    {
        "from": "Tel-Aviv",
        "to": "New-York",
        "departureTime": "07:00AM",
        "landingTime": "20:00PM",
        "price": "$1000"
    },
    {
        "from": "Tel-Aviv",
        "to": "New-York",
        "departureTime": "07:00AM",
        "landingTime": "20:00PM",
        "price": "$1000"
    },
];
