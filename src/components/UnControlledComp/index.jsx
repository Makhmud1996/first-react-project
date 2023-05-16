import React,{useRef} from 'react';
import "./style.css";


const UnControlledComp = () => {

  const phoneNumberRef =useRef()
  const passwordRef =useRef()

  const login =e=>{
    e.preventDefault(); 

    console.log(phoneNumberRef.current.value);
    console.log(passwordRef.current.value);
    e.target.reset();

    

  };

  const onKeyDetect=e=>{

    const{type,key}=e;
    if(type === "keydown" && key==="Enter"){
      
    }

  };

  
  
       
    

 

  return (
    <div className='wrapper'>
        <h3>Yana bir bor salom</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tenetur aperiam.</p>     
        <form onSubmit={login}>
        <input type="number" placeholder='type youer number' ref={phoneNumberRef} />
        <input type="password" placeholder='type youer password' ref={passwordRef} onKeyDown={onKeyDetect} />
        <button type='submit'>Login</button>
        </form>
        </div>
  )
}

export default UnControlledComp