import React from 'react';

const Conditional = () => {

  const value = false;

  const ShowIt = () => {
    return (
      <div>
        {value ? 
          <div>Value is true</div>
          : 
          <div>Value is false</div>
        }
      </div>
    );
  } 
  
  return(
    <div>
      {ShowIt()}
    </div>
  )
}

export default Conditional;