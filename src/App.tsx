import './App.css'
import './index.css'
import { Outlet } from 'react-router-dom'

function App() {

  // const [count, setCount] = useState(0)
  /**
   * This is the main app component.
   * It renders a simple heading with a count variable
   * that increments when the user clicks on the heading.
   */
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
