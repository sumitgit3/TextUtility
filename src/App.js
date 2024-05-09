import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
function App() {
  const [theme,setTheme] = useState('light');
  const [alert,setAlert] = useState(null);

  // Handle DarkMode theme this function is passed to navbar component
  const toggleTheme = ()=>{
    if (theme ==='light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#091527';
      showAlert("Dark Mode Enabled",'success');
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Disabled",'light');
    } 
  }
  // Function to handle alert pass to any component
  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  return (
    <>
    <Navbar title = "Text Convertor" aboutText = "About Us" mode={theme} toggleTheme={toggleTheme}/>
    <Alert alert={alert}/>
    <TextArea heading="Enter your text here" mode={theme} showAlert={showAlert}/>
     
    </>
  );
}

export default App;
