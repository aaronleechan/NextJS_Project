import React from 'react';
import { IPersonalInfoCompProps } from "../interface/myInfoInterfaces";

function RenderEditForm(props: IPersonalInfoCompProps) {
    const saveDisabled = props.valid !== undefined && !props.valid;
    return(
        <div>
            {props.children}
            <button> Cancel </button>
            <button> Save </button>
        </div>
    )
}

function RenderComponent(props: any){
    console.log({" RenderComponent ": props})
    const hide = props.hide;
    return <RenderEditForm {...props}/>
}

const PersonalInfoFieldComponent: React.FC<IPersonalInfoCompProps> = (props: IPersonalInfoCompProps) =>{
    const [hide,setHide] = React.useState(false);

    const onSave = () =>{
        if(props.children.ref.current.state.isValid){
            const model = props.children.ref.current.getModel();
            // props.onSave(model)
            setHide(!hide)
        }else{
            setHide(hide)
        }
    }

    return(
        <div>
            <RenderComponent
                {...props}
                hide={hide}
                onCancel = {()=> setHide(!hide)}
                onSave = {onSave}
                onEdit = {(e: any) => {
                    e.preventDefault();
                    setHide(!hide);
                }}
            />
        </div>
    )
}

export { PersonalInfoFieldComponent }