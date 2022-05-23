import React,{useState} from "react";
import { TextInput } from "../commons";
import { EMAIL_REG_EXP } from "../../util/validators";


interface EmailProps {
    name: string;
}

const Email: React.FC<EmailProps> = (props: EmailProps) =>{

    const {name} = props;
    
    const [email,setEmail] = useState<string>("");

    return(
        <TextInput 
            label={"Email"}
            name={name}
            type={"text"}
            id={name}
            value={email}
            onValueChange={(val) => setEmail(val)}
            required
            validationErrors={{
                required: "Email address is required",
                matchRegexp: "Email address is invalid"
            }}
            validations = {{matchRegexp: EMAIL_REG_EXP}}
        />
    )
}

export default Email;