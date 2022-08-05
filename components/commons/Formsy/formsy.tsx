import React, { useState, useRef } from 'react';
import Formsy from 'formsy-react';
import styles from './formsy.module.scss';
import InjectedProps from 'formsy-react';
import { SubmitButton } from '../buttons/formsyButton/Button';

const FormsyComponent = (props: any) => {
  const { onSubmit } = props;

  const formRef = useRef<InjectedProps>(null);

  const [canSubmit, setCanSubmit] = useState(false);

  const { children } = props;

  const submit = () => {
    console.log(formRef.current?.getModel());
    onSubmit(formRef.current?.getModel());
  };

  const enableButton = () => {
    setCanSubmit(true);
  };

  const disableButton = () => {
    setCanSubmit(false);
  };

  const cancelButton = () => {
    console.log({ ' REF ': formRef?.current?.reset() });
  };

  return (
    <Formsy
      onValidSubmit={submit}
      onValid={enableButton}
      onInvalid={disableButton}
      ref={formRef}
    >
      {children}
      <SubmitButton
        onClick={cancelButton}
        label={'Cancel'}
        type={'button'}
        size={'medium'}
        primary={false}
      />
      <SubmitButton
        disabled={!canSubmit}
        label={'Submit'}
        type={'submit'}
        size={'medium'}
        primary={true}
      />
    </Formsy>
  );
};

export default FormsyComponent;
