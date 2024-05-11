import React,{useState} from 'react'

export default function TextArea(props) {
    const [text,setText] = useState("");
    const[word,setWord] = useState("");
    const[replace,setReplace] = useState("");
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const handleWordOnChange = (event)=> {
      setWord(event.target.value);
      
    }
    const handleReplaceOnChange = (event)=> {
      setReplace(event.target.value);
    }
    const toUpperCase = ()=> {
        let a = text.toUpperCase();
        setText(a);
        props.showAlert("Converted to Uppercase",'info');
    }
    const toLowerCase = ()=> {
      let a = text.toLowerCase();
      setText(a);
      props.showAlert("Converted to LowerCase",'info');
    }
    const clearText = ()=> {
      let a ="";
      setText(a);
      props.showAlert("Text cleared",'info');
    }
    const findReplace = ()=> {
      let a =text.replaceAll(word,replace);
      setText(a);
      props.showAlert("Word Replaced!",'info');
    }
    const noOfWords = ()=>{
      let count = 0;
      const words = text.split(" ");
      count = words.reduce((acc,curr)=>{
          if(curr !== '') acc =acc+1;
          return acc;
      },0);
      return count;
    }


   
  return (
    <>
    <div className="container" >
        <h1 style={props.mode==='dark'?{color:'green'}:{color:'black'}}>{props.heading}</h1>
      <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange}  rows="8" style={props.mode==='dark'?{backgroundColor:'black',color:'green'}:{backgroundColor:'white',color:'black'}}></textarea>
           <button className="btn btn-primary my-2" onClick={toUpperCase} style={props.mode==='dark'?{backgroundColor:'black',color:'green'}:{}}>Convert to UpperCase</button>
           <button className="btn btn-primary mx-2" onClick={toLowerCase} style={props.mode==='dark'?{backgroundColor:'black',color:'green'}:{}}>Convert to LowerCase</button>
           <button className="btn btn-primary mx-2" onClick={clearText} style={props.mode==='dark'?{backgroundColor:'black',color:'green'}:{}}>Clear Text</button>
           <div className="input-group ">
            <div className="input-group-prepend ">
              <span className="input-group-text " id="" style={props.mode==='dark'?{backgroundColor:'black',color:'green'}:{backgroundColor:'#0D6EFD',color:'white'}}>Word  and Replace</span>
            </div>
            <input type="text" className="form-control " value={word} onChange={handleWordOnChange} style={props.mode==='dark'?{backgroundColor:'black',color:'green'}:{}}/>
            <input type="text" className="form-control" value={replace} onChange={handleReplaceOnChange} style={props.mode==='dark'?{backgroundColor:'black',color:'green'}:{}} />
          
          </div>
          <button className="btn btn-primary my-2" onClick={findReplace} style={props.mode==='dark'?{backgroundColor:'black',color:'green'}:{}}>Find and Replace</button>
          
      </div>
      <div className="container">
        <h3 style={props.mode==='dark'?{color:'green'}:{color:'black'}}>Text Summary:</h3>
        <p style={props.mode==='dark'?{color:'green'}:{color:'black'}}>{noOfWords()} words and {text.length} characters</p>
        <h3 style={props.mode==='dark'?{color:'green'}:{color:'black'}}>Preview :</h3>
        <p style={props.mode==='dark'?{color:'green'}:{color:'black'}}>{text}</p>
      </div>
    </div>
    </>
  )
}
