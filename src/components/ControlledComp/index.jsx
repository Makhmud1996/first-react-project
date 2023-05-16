import React from 'react';
import "./style.css";
import { useState } from 'react';
const ControlledComp = () => {
    const[user,setUser]=useState({phoneNumber:'',password:''});

    const onChange=e=>{
        const{name,value}=e.target;
        setUser(prev=>({...prev,[name]:value}))

       
    }

    console.log(user);
    console.log("Login");

  return (
    <div className='wrapper'>
        <h3>Yana bir bor salom</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tenetur aperiam.</p>
        <p>{user.phoneNumber} {user.password} </p>        
        <form>
        <input type="number" placeholder='type youer number' onChange={onChange} name='phoneNumber' />
        <input type="password" placeholder='type youer password' onChange={onChange} name='password'  />
        <button type='submit' >Login</button>
        </form>
        </div>
  )
}

export default ControlledComp