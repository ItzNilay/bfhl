import React, { useState } from 'react';
import axios from 'axios';

const TextInputComponent = ({ setResponse, setError }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async () => {
    try {
      const jsonData = JSON.parse(input);
      const response = await axios.post('YOUR_BACKEND_API_URL/bfhl', jsonData);
      setResponse(response.data);
      setError(null);
    } catch (err) {
      setError('Invalid JSON or API request failed.');
      setResponse(null);
    }
  };

  return (
    <div>
      <textarea 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder='Enter JSON here' 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TextInputComponent;
