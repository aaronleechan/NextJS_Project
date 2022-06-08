import React,{useEffect, useState} from "react";
import { withFormsy } from "formsy-react";
import {RequiredValidation, ValidationError, Validations} from "formsy-react/dist/interfaces";
import styles from './TextInput.module.scss';



export interface IFormsDecorator{
    // hasValue?: boolean;
    // isFormDisabled?: boolean;
    // isFormSubmitted?: boolean;
    // isPristine?: boolean;
    // isRequired?: boolean;
    // isValid?: boolean;
    // ref?: React.Ref<any>;
    // setValidations?:(validations: Validations<any>,required: RequiredValidation<any>) => void;
    // setValue?: (value: any, validate?: boolean) => void;
    // showError?: boolean;
    // showRequired?: boolean;
    // value?: any;
    errorMessage: any;
    errorMessages: any[];
}

export interface ITextInputFormsyProps extends React.InputHTMLAttributes<HTMLInputElement>{ 
    // appearance?: string;
    // iconPresentation?: React.ComponentClass<any>;
    label: string | JSX.Element;
    // masked?: boolean;
    name: string;
    id: string;
    // noWrapError?: boolean;
    onValueChange(value: string): void;
    // placeholder?: string;
    // showErrorLabel?: boolean;
    // showErrorWhileBlured?: boolean;
    // transformValue?(value: string): string;
    type: 'password' | 'text' | 'number';
}

//Id and name are the same variable

const TextInput: React.FC<IFormsDecorator & ITextInputFormsyProps> = (props:(IFormsDecorator & ITextInputFormsyProps)) =>{

    const [showError,setShowError] = useState(false)
    const [focused,setFocused] = useState(false)
    /* attribute */
    const {label,name,value,type,required} = props;

    /*Function Call */
    const {onValueChange} = props;


    useEffect(()=>{
        getErrorMessage();
    },[props.errorMessage])

    function renderLabel(): JSX.Element {
        return(
            <label>
                <span>{label}</span>
            </label>
        )
    }

    function onChange(e: any){
        const inputVal = e.currentTarget['value'];
        onValueChange(inputVal)
    }

    function onBlur(e: any){
        getErrorLabel();
        if(name == "email"){
            onValueChange(e.currentTarget.value.trim())
        }
    }

    function getErrorMessage(){
        if(props.errorMessage){
            setShowError(true)
        }else{
            setShowError(false)
        }
    }

    const getErrorLabel = () =>{
        return(
            <div id={`${name}-errorMsg`} className={styles.error}>
                {props.errorMessage}
            </div>
        )
    }

    function onFocus(e: any){
        // console.log({" onFocus ": e.currentTarget.value})
    }

    function getInputClassName(): string{
        const className = [styles.input];

        if(showError){
            className.push(styles.error)
        }
        return `${className.join(" ")}`
    }

    return(
        <div>
                {renderLabel()}
                <input 
                    onBlur = {onBlur}
                    name  = {name}
                    id={name}
                    value = {value || ""}
                    type  = {type || "text"}
                    onChange={onChange}
                    onFocus={onFocus}
                    required={required}
                    className={getInputClassName()}
                />
                {showError && getErrorLabel()}
        </div>
    )
}

export default withFormsy(TextInput);