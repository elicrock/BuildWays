import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form" name="searchForm" noValidate>
        <input className="search__input" placeholder="Поиск" minLength={2} maxLength={40} required />
      </form>
    </div>
  );
}

export default SearchForm;
