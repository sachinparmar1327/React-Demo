import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

// import {
//    BrowserRouter as Router,
//    Route
//   } from 'react-router-dom';

function App() {
   const[mode, setMode] = useState('light');
   const[alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
           setAlert({
            msg: message,
            type: type
           })
           setTimeout(()=> {
              setAlert(null);
           }, 1500);
   }
   const toggleMode = ()=>{
      if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#181829c7';
      showAlert("Dark mode has been enabled", "success")
     // document.title = 'TextUtils - Dark Mode';
      // setInterval(() =>{
      //    document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInteval(() =>{
      //    document.title = 'Install TextUtils Now';
      // }, 1500);
   }
   
   else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      //document.title = 'TextUtils - Light Mode';

   }
}
  return (
   <>
   
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
{/* <Navbar/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className='container my-3'>
   {/* <switch>
      <Route exact path="/about">
         <About/>
      </Route>
      <Route exact path="/"> */}
<TextForm showAlert={showAlert} heading="Try TextUtils - Word Conter, Remove extra spaces" mode={mode} /> 
{/* </Route>
</switch> */}
</div>
{/* </Router> */}
<About  mode={mode}/>


   </>

   ); 
}

export default App;
