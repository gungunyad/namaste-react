import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
    //console.log("Parent Constructor");
    }

    ComponentDidMount() { 
        //console.log("Parent ComponentDidMount");
    }

    render() {
        //console.log("Prent Render");
    return (
        <div>
            <h1>About page</h1>
             <div>
                LoggedIn User
                <UserContext.Consumer>
                    { ({loggedInUser}) => (
                       <h1 className="text-lg font-bold">{loggedInUser}</h1>
                )}
                </UserContext.Consumer>
            </div> 
            <UserClass Name={"Gungun"} Location={"Thane"}/>
        </div>
    );
}
};

export default About;
