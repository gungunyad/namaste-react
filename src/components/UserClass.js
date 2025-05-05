import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
       
        this.state = {}
    
    }

    render() {

        const { Name, Location} = this.props;

        return (
            <div className="User-Card">
                <h2>Name:{Name}</h2>
                <h3>Location:{Location}</h3>
            </div>
        )
    }
    
}

export default UserClass;