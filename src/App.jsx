import React from 'react';
import { useState } from 'react';
import './App.css';
import Todolist from './Todolist';
import AddIcon from '@mui/icons-material/Add';



const App = () => {
  const [inputList, setInputList] = useState("")
  const [Items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)

  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")
  }

  const deleteItem=(id)=>{

       setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
          return index !== id

        })

       })
  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvent} />
          <button  className='button' onClick={listOfItems}>
            <AddIcon/>
          </button>
          <ol>
            {
              Items.map((interval,index) => {
                return  <Todolist 
                key={index} 
                id={index}
                text={interval}
                onSelect={deleteItem} />
              })}
          </ol>

        </div>
      </div>

    </>



  )
}
export default App;


