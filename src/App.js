import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
/*import Content from './Content';*/
import Table from './Table';

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setItems(data);
        }
      } catch (err) {
        console.log(err.stack)
      }
    }
    
    fetchItems();
  
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType}
        setReqType={setReqType}
      />
      {/*<Content items={items}
        setItems={setItems}
      />*/}
       <Table items={items}/>
    </div>
  );
}

export default App;
