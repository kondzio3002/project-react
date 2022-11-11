import styles from './SearchForm.module.scss';

const SearchForm = () => (
  <form className={styles.searchForm}>
    <input type="text" className={styles.input} />
    <button className={styles.button}>Search</button>
  </form>
);

export default SearchForm;