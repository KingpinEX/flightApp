import React from 'react';

export default class AddFlightForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: '',password: ''};
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        const {addFlight} = this.props;
        const {from,to,departureTime,landingTime,price} = this.state;
        addFlight({from,to,departureTime,landingTime,price});
        event.preventDefault();
    };

    render() {
        const {handleChange,handleSubmit} = this;
        let {from,to,departureTime,landingTime,price} = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    from:
                    <input type="text" name="from" value={from} onChange={handleChange} />
                </label>
                <label>
                    to:
                    <input type="text" name="to" value={to} onChange={handleChange} />
                </label>
                <label>
                    departureTime​:
                    <input type="text" name="departureTime" value={departureTime} onChange={handleChange} />
                </label>
                <label>
                    landingTime​:
                    <input type="text" name="landingTime" value={landingTime} onChange={handleChange} />
                </label>
                <label>
                    price:
                    <input type="text" name="price" value={price} onChange={handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}