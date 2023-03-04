import React, { useState } from 'react';

export default function Form(props) {
    const changeToUpperCase = () => {
        setText(text.toUpperCase());
    };
    const changeToLowerCase = () => {
        setText(text.toLowerCase());
    };
    const changeToTitleCase = () => {
        setText(text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
    };
    const changeToReverse = () => {
        setText(text.split('').reverse().join(''));
    };
    const handleClearText = () => {
        setText("");
        props.showAlert("Text Successfully Cleared!", "success");
    }
    const handleCopyText = () => {
        const copyText = document.getElementById("textBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        text && props.showAlert("Copied to Clipboard!", "success");
    };
    const handleExtraSpaces = () => {
        const newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const [text, setText] = useState("");
    // text="Hello";//wrong way to Change State
    // setText("Hello"); //right way to Change State

    return (
        <div className="container my-5 ">
            <div className="mb-3">
                <label htmlFor="textBox" className="form-label"><h4>Enter Text Below To Analyse :</h4></label>
                <textarea className="form-control" id="textBox" rows="4" value={text} onChange={handleOnChange} placeholder="Type or Paste Your Content Here!🚀👈" ></textarea>
            </div>
            <div className="col-auto">
                <button type="submit" disabled={text.length<1} className={`btn btn-${props.btnBgColor} mb-3 mx-3`} onClick={changeToUpperCase}>Convert to UpperCase ⬆️</button>
                <button type="submit" disabled={text.length<1} className={`btn btn-${props.btnBgColor} mb-3 mx-3`} onClick={changeToLowerCase}>Convert to LowerCase ⬇️</button>
                <button type="submit" disabled={text.length<1} className={`btn btn-${props.btnBgColor} mb-3 mx-3`} onClick={changeToTitleCase}>Convert to TitleCase</button>
                <button type="submit" disabled={text.length<1} className={`btn btn-${props.btnBgColor} mb-3 mx-3`} onClick={changeToReverse}>Reverse the Text 🔀</button>
                <button type="submit" disabled={text.length<1} className={`btn btn-${props.btnBgColor} mb-3 mx-3`} onClick={handleCopyText}>Copy Text ©️</button>
                <button type="submit" disabled={text.length<1} className={`btn btn-${props.btnBgColor} mb-3 mx-3`} onClick={handleExtraSpaces}>Remove Extra Spaces </button>
                <button type="submit" disabled={text.length<1} className={`btn btn-${props.btnBgColor} mb-3 mx-3`} onClick={handleClearText}>Clear Text 🧹</button>
            </div>
            <div className="mx-8">
                <label forhtml="outBox" className="form-label"><h4>Output :</h4></label>
                <p id="outBox" >{text.length!==0?text:"Output Show Here!👈🚀"}</p>
                {/* <textarea className="form-control" id="outBox" rows="4" value={text} placeholder="Your Output will Show Here!" readOnly></textarea> */}
                <p>Char Count: {text.length} | Word Count: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            </div>
        </div>

    );
}


