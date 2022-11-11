import styles from './TextInput.module.scss';

const TextInput = props => (
  <input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
);

export default TextInput;