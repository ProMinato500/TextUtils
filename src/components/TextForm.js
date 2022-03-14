import React, {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase!", "success")
  }
  const handleLowClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!", "success")
  }
  const handleClearClick = () => {
      let newText = ('');
      setText(newText);
      props.showAlert("Cleared Text!", "success")
  }
  const handleOnChange = (event) => {
      setText(event.target.value);
  }
  const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success")
  }
  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces!", "success")
  }


  const [text,setText] = useState('');
  
  return (
    <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter Text Here...' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'whitegrey':'white', color: props.mode==='dark'?'black':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text === ('')?text.split(" ").length-1:text.split(" ").length} word(s) and {text.length} character(s)</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview in here"}</p>
        </div>
    </>
  )
}
