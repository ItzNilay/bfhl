import React, { useState } from 'react';
import TextInputComponent from './components/TextInputComponent';
import DropdownComponent from './components/DropdownComponent';
import ResponseDisplayComponent from './components/ResponseDisplayComponent';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>Your Roll Number</h1>
      <TextInputComponent setResponse={setResponse} setError={setError} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && <DropdownComponent setSelectedOptions={setSelectedOptions} />}
      <ResponseDisplayComponent response={response} selectedOptions={selectedOptions} />
    </div>
  );
};

export default App;
