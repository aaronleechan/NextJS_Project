import Formsy from "formsy-react";
import React from "react";
import { PersonalName,Email,Password, Phone } from "../../components/user_application_form";
import {FormsyComponent} from "../../components/commons";

const UserApplication = () =>{
    
    return(
        <div> 
            <h1>This is Sample Application Form </h1>
            <FormsyComponent>
                <PersonalName name={"personal_name"}/>
                <Email name={"email"}/>
                <Password name={"password"}/>
                <Phone name={"phoneNumber"} />
            </FormsyComponent>
        </div>
    )
}

export default UserApplication;