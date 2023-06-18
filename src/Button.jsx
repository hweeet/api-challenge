import React from 'react';

const Button = ({ reqType, setReqType, buttonText }) => {
    return (
          <button onClick={() => setReqType(`${buttonText}`)} 
                  className={buttonText === reqType ? 'active' : null}>
          {buttonText}
          </button>
          
    )
};

export default Button;
