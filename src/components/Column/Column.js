import styles from './Column.module.scss';

const Column = props => (
  <article className={styles.column}>
    <h3 className={styles.title}>{props.title}</h3>
  </article>
);

export default Column;