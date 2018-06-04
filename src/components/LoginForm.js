import React from 'react';

export default class LoginForm extends React.Component {
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
        const {checkSubmit} = this.props;
        const {user,password} = this.state;
        checkSubmit(user,password);
        event.preventDefault();
    };

    render() {
        const {handleChange,handleSubmit} = this;
        let {user,password} = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    User Name:
                    <input type="text" name="user" value={user} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}