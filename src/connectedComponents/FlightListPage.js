import React from 'react';
import AddFlightForm from "../components/AddFlightsForm";

const FlightListPage = ({flights,addFlight}) => {

    const getFlights = (flights) => {
        return flights.map((flight,key) => {
            return (
              <tr key={key}>
                  <td>{flight.from}</td>
                  <td>{flight.to}</td>
                  <td>{flight.departureTime}</td>
                  <td>{flight.landingTime}</td>
                  <td>{flight.price}</td>
              </tr>
            );
        })
    };

    return (
        <div className={"page-con"}>
            <div className={"right-side"}>
                <h1>Flights:</h1>
                <table className={"flights-table"}>
                    <tr>
                        <td>from</td>
                        <td>to</td>
                        <td>departureTime</td>
                        <td>landingTime</td>
                        <td>price</td>
                    </tr>
                    {getFlights(flights)}
                </table>
            </div>

            <div className={"left-side"}>
                <AddFlightForm addFlight={addFlight} />
            </div>

        </div>
    )
};

export default FlightListPage;