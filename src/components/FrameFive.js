import React, { useState } from 'react';
    
const FrameFive = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');


  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setInput3(e.target.value);
  };

  return (
    <section className="five">
        <div className="section5">
        <div>
      <input
        className="paste"
        type="text"
        placeholder="Paste URL here..."
        value={input1}
        onChange={handleInputChange1}
      />
      <input
        className="alias"
        type="text"
        placeholder="Type Alias here..."
        value={input2}
        onChange={handleInputChange2}
      />
      <div className="cnt">
        <input
          className="domain"
          type="text"
          placeholder="Choose Domain"
          value={input3}
          onChange={handleInputChange3}
        /> 
        <img src={require("../images/chevron-down.png" )} alt=""></img>
      </div>
      
       <div className="trim-btn">
          <button className="btn-trim">Trim URL</button>
        </div>
    </div>

    <div className="trim-text">
        <p>By clicking TrimURL, I agree to the<span>Terms of Service, <br></br> Privacy Policy</span>and Use of Cookies.</p>
    </div>

    </div>
    </section>
    
  );
};

export default FrameFive;
