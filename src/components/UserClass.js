import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
       
        this.state = {
            userInfo: {
                name:"Dummy",
                location:"Default",
            },
        };
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/gungunyad");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {

    }
 
    componentWillUnmount() {}

    render() {
        //console.log(this.props.name + "Chlid Render");

        const { name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="User-Card">
                <img src={avatar_url} />
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
            </div>
        );
    }
}

export default UserClass;
