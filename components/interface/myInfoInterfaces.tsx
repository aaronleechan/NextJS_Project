export interface IUserInfo{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IPersonalInfoFormProps{
    userInfo: IUserInfo
}

export interface IPersonalInfoCompProps{
    labelName: string;
    value: string;
    children?: any;
    buttons?: boolean;
    valid?: boolean;
    onSave?: (props: any) => void;
    onCancel?: (props: any) => void;
    showEdit?: boolean
}

export interface IMyInfoPresentationProps{
    userInfo: IUserInfo;
    onSaveName(model: INameModel): void
}

export interface INameModel{
    firstName: string;
    lastName: string;
}