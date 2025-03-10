import React, { useState } from 'react';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div 
            style={{
              cursor: 'pointer',
              padding: '10px',
              border: '1px solid #ddd',
              backgroundColor: '#f9f9f9',
              marginBottom: '5px'
            }}
            onClick={() => handleToggle(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div 
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                borderTop: 'none',
                backgroundColor: '#fff'
              }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
