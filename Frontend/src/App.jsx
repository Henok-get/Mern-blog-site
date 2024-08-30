import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import about from './pages/about'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
function App() {
  
  return (
 <BrowserRouter>

 <Header/>
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
