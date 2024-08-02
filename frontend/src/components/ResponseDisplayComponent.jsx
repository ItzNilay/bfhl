import React from 'react';

const ResponseDisplayComponent = ({ response, selectedOptions }) => {
  if (!response) return null;

  const displayData = selectedOptions.reduce((acc, option) => {
    if (response[option]) acc[option] = response[option];
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(displayData).map((key) => (
        <div key={key}>
          <h3>{key}</h3>
          <p>{JSON.stringify(displayData[key])}</p>
        </div>
      ))}
    </div>
  );
};

export default ResponseDisplayComponent;
