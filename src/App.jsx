// Haga la importaciones necesarias como dice el documento
import { useState } from "react"
import { searchRobots } from "./Api"
import SearchBar from './components/SearchBar'
import RobotsList from './components/RobotsList'

function App() {
  // Cree un estado robots de tipo ([]) utilizando useState
  const [robots, setRobots] = useState([])

  // Construya una funcions handleSubmit asyncrona que recibe como paramentro term
    const handleSubmit = async(term) => {
    const result = await searchRobots(term)

    setRobots(result)
  }

  return (
    <>
      <h1>My Robots</h1>
      <SearchBar onSubmit={handleSubmit} />
      <RobotsList robots={robots} />
    </>
  )
}

export default App