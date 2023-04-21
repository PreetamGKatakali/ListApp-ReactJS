import React, { useState } from 'react';



const initialList  = [
  {
    name: 'Robin',
  },
  {
    name: 'Dennis',
  },
  {
    name:'smith',
  }
];

const App = () => {
    const [list, setList] = React.useState(initialList)
    const [name,setname]=React.useState('')
    const [isactive,setisactive]=useState(false)
    const[boxcheck,setboxcheck]=useState(false)
    const[listup,setlistup]=useState(initialList.length)
    let listlength=initialList.length
    function handleChange(event) {
        // track input field's state
        setname(event.target.value)
        // console.log(name)
      }
      function handleAdd() {
        // add item
        if(name==='')
         {
            alert('plzz enter the value')
         }
         else{
            setlistup(listup+1)
            const newlist=list.concat({name})
            setList(newlist)
            initialList.push({name})
            setname('')
         }
         
         
      }
      function complete(event, key){
        
        // console.log(event.target);
        // console.log('key index: ', key);
        // setisactive(current => !current);
        event.currentTarget.classList.toggle('complete');
      }
       function updatelist(event){
         if(event.target.checked==true){
          console.log(`${event.target} is click`)
          const updatedlist=listup-1
          setlistup(updatedlist)
          if(updatedlist==0){alert(`list is empty`)}
          
         }
         else{
          console.log(`${event.target} is unclick`)
          setlistup(listup+1)

         }
         
         
        
      }
     
      
      
  return (
    <div className='cointer'>
        <div>
        <input type="text"  value={name} placeholder='Add items' onChange={handleChange} className='input-field' />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
        </div>
    <div>
      {list.map((item,key) => (
        <>
        <div onClick={event => complete(event, key)} className='item-cointer'>{item.name} 
        <input type='checkbox' className='checkbox-btn' name={item.name} onClick={updatelist}></input>
        </div>
        {/* <button type='radio'>complete</button> */}
        
        </>
      ))}
     
    </div>
    <div className='bottom-div'>Items left:{listup}</div>
    </div>
  );
};

export default App;