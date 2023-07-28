import { useState } from 'react'
import Footer from './Footer'
import './App.css'
import Header from './Header'
import Content from './Content'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='App'>
     <Header />
     <Content />
     <Footer />
    </div>
  )
}

export default App
