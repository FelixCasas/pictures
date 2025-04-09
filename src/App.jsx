import SearchBar from "./componentes/SearchBar"
import ImageList from "./componentes/ImageList"
import searchImages from "./api"

function App() {
  searchImages('cars')
  return (
    <>
      <h1> Picture App </h1>
      <SearchBar />
      <ImageList />   
    </>
  )
}

export default App
