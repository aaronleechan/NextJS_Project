import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className={styles.container}>{sampleTextProp} This is Testing</div>
  );
};

export default BaseTemplate;
