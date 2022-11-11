import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';

const SearchForm = () => (
  <form className={styles.searchForm}>
    <TextInput />
    <button className={styles.button}>Search</button>
  </form>
);

export default SearchForm;