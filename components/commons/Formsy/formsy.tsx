import React, { useState, useRef } from 'react';
import Formsy from 'formsy-react';
import styles from './formsy.module.scss';
import InjectedProps from 'formsy-react';

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
      <button
        id="cancel_button"
        className={styles.cancel_button}
        type="button"
        onClick={cancelButton}
      >
        {' '}
        Cancel{' '}
      </button>
      <button
        id="submit_button"
        className={styles.submit_button}
        type="submit"
        disabled={!canSubmit}
      >
        {' '}
        Submit{' '}
      </button>
    </Formsy>
  );
};

export default FormsyComponent;
