import React, {useState} from 'react'


function TextForm(props) {
    const handleUpclick=()=> {
       // console.log("uppercase button was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowclick=()=> {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleonChange=(event)=> {
        setText(event.target.value)
        //console.log("On Change");
    }
    const handleCopy=()=>{
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('Enter text here');
    // setText("hey there!") 
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
             <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey'}} value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
             <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
             <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to Lowercase</button>
             <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>PREVIEW</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm
