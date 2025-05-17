import { useState } from 'react'
import DashBoard from "./components/DashBoard.jsx";
import BookList from "./components/BookList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DashBoard/>
      <BookList/>
    </>
  )
}

export default App
