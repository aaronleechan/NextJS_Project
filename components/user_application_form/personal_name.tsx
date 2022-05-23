import React,{useState} from "react";
import { TextInput } from "../commons";
import { NAME_REG_EXP } from "../../util/validators";


interface PersonalNameProps {
    name: string;
}

const PersonalName: React.FC<PersonalNameProps> = (props:PersonalNameProps ) =>{

    const {name} = props;

    const [fullName,setFullName] = useState<string>("");

    return(
        <TextInput
            label={"Personal Full Name"}
            name={props.name}
            type={"text"}
            id={name}
            value={fullName}
            onValueChange={(val) => setFullName(val)}
            validations={{
                matchRegexp: NAME_REG_EXP,
                maxLength: 30,
                minLength: 2,
            }}
            validationErrors={{
                matchRegexp: "Invalid Name",
                maxLength: "Name must be between 2 and 30 character long",
                minLength: "Name must be between 2 and 30 character long",
                required: "New Password is required",

            }}
        />
    )
}

export default PersonalName;