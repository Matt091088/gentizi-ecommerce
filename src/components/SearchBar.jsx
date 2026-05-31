// Componente buscador
function SearchBar(props) {

  return (

    <div className="search-container">

      <input

        type="text"

        placeholder="Buscar productos..."

        onChange={(event) => props.handleSearch(event.target.value)}

      />

    </div>

  )
}

export default SearchBar