
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/homepage'
import Form from './components/form'


function App() {
  

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/form' element={<Form/>}/>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
