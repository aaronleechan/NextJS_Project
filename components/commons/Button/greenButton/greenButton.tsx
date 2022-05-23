import React,{useState} from "react"
import { withFormsy } from "formsy-react";

// interface IBaseButton{
//     onClick?: (event: React.MouseEvent<HTMLElement>) => void;
//     disabled?: boolean;
//     filled?: boolean;
//     wide?: boolean;
//     dialog?: boolean;
//     size?: "large" | "small" | "medium_small" | "medium" | "normal";
//     color?: "green" | "light-green" | "blue" | "organge" | "purple" | "yellow";
// }

// interface IButton extends IBaseButton{
//     elId?: string;
//     responsive?: boolean;
//     ownedAndDisabled?: boolean;
//     noEllipsis?: boolean;
//     primary?: boolean;
//     dropDownArrow?: boolean;
//     type?: "button" | "submit" | "reset";
// }

// interface IUniversalButton extends IBaseButton{
//     elId?: string;
//     autofocus?: boolean;
//     dropDownArrow?: boolean;
//     haspopup?: boolean | "dialog" | "menu" | "false" | "true" | "listbox" | "tree" | "grid";
//     isPopupOpen?: boolean;
//     maxWidth?: string;
//     ariaLabel?: string;
//     ariaDisabled?: boolean;
// }

interface greenButtonInterface{
    label: string;
    type:  "button" | "submit";
    disabled?: boolean;
    name: string;
}

const GreenButton: React.FC<greenButtonInterface> = (props: greenButtonInterface) =>{

    const {label,type,name,disabled} = props;
    const [canSubmit,setCanSubmit] = useState(false)

    const submit = (e: any) =>{
        console.log({" On Submit ": e})
     }
 
     const enableButton = () => {setCanSubmit(true)}
 
     const disableButton = () => {setCanSubmit(false)}

    return(
        <button
            name={name}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default withFormsy(GreenButton)