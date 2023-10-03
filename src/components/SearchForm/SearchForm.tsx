function Search() {
  return (
    <div className="search">
      <form className="search__form" name="searchForm" noValidate>
        <input className="search__input" placeholder="Поиск по каталогу" required />
      </form>
    </div>
  )
}

export default Search