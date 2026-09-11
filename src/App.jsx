import Map from "./Map"
import { Routes , Route } from "react-router"
import Weather from "./Weather"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
    </>
  )
}

export default App
