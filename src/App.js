import logo from './logo.svg';
import './App.css';
import Font from './components/Font';
import Imgview from './Imgview';
import {Route,Routes} from 'react-router-dom'


function App(){

  


  return(
     <div>
      
      <Routes>
        <Route path='/' element={ <Font/>}/>
        
      <Route  path='image/'  element={<Imgview/>}/>
      </Routes>
       
      
    
    
     </div>
  )
}
export default App