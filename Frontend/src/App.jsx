import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import about from './pages/about'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
function App() {
  
  return (
 <BrowserRouter>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path='/about' element={<about/>}/>
<Route path='/sign-in' element={<Signin/>}/>
<Route path='/sign-up' element={<Signup/>}/>

<Route path='/dashboard' element={<Dashboard/>}/>

<Route path='/projects' element={<Projects/>}/>




 </Routes>
 
 
 </BrowserRouter>
  )
}

export default App
