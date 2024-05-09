import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
function App() {
  const [theme,setTheme] = useState('light');

  const toggleTheme = ()=>{
    if (theme ==='light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#091527';
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
    } 
  }

  return (
    <>
    <Navbar title = "Text Convertor" aboutText = "About Us" mode={theme} toggleTheme={toggleTheme}/>
    <TextArea heading="Enter your text here" mode={theme}/>
     
    </>
  );
}

export default App;
