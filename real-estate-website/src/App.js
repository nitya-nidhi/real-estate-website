/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 28/09/2021 - 20:09:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Administrator
    * - Modification    : 
**/

import React, {useState}  from 'react';
import About from './Components/About';
import Agent from './Components/Agent';
import Header from './Components/Header';
import Property from './Components/Property';
import Working from './Components/Working';
import Contacts from './Components/Contacts';

function App() {

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="App">
      <Header />
       <Working />
       <About />
       <Agent />
       <Property />
       <Contacts />
      <h3>Register Your Name Here</h3>
      {inputList.map((x, i) => {
        return (
          <div className="box-1">
            <input
              name="firstName"
              placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="lastName"
              placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box1">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}


export default App;
