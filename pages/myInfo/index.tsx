//MyInfoPresentation.tsx

import {useRef, useState} from "react";
import * as React from "react";
import Formsy from "formsy-react";
import { IMyInfoPresentationProps, IPersonalInfoCompProps } from "../../components/interface/myInfoInterfaces";
import { PersonalInfoFieldComponent } from "../../components/myinfo/personalInfoField";


const UserInfoSection: React.FC<IPersonalInfoCompProps> = (props: IPersonalInfoCompProps) => {

    const nameRef = useRef();

    const {children, ...resProps } = props;
    
    const [canSave, setCanSave] = useState(false);
    
    let changed = false;

    return(
        <PersonalInfoFieldComponent valid={canSave} {...resProps}>
            <Formsy
                onValid ={() => setCanSave(changed)}
                onInvalid={() => setCanSave(false)}
                onChange = {(currentValues, isChanged) =>(changed = isChanged)}
            >
                {children}
            </Formsy>
        </PersonalInfoFieldComponent>
    );
};

const MyInfo = ({userInfo,onSaveName}: IMyInfoPresentationProps) => {
    return(
        <div>
            <div>Personal Information</div>
            <UserInfoSection
                labelName={"Full Name"}
                onSave={(model)=> onSaveName(model)}
                showEdit={true}
                value="Aaron Chan"
            >
            </UserInfoSection>
        </div>
    )
}
export default MyInfo;
