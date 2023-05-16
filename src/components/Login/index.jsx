import React,{useRef, useState} from 'react';
import "./style.css";
import {Button, Form, Input, InputNumber} from 'antd';
import useInput from '../../Generic';


const Login = () => {

  const phoneNumberRef =useRef()
  const passwordRef =useRef()

  const onFinish = (values) => {
    console.log('Success:', values);
    const{phoneNumber,password}=values
    console.log({phoneNumber:`+998${phoneNumber}`,password});
  };


  const {phoneFormatter}=useInput()
  
  const [phoneValue,setphoneValue]=useState('')
  const {phoneNumber,password}={phoneNumber:phoneValue.replace(/[^\d]/g, ""),password:passwordRef}
  
 

  return (
    <div className='wrapper'>
        <h3>Yana bir bor salom</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tenetur aperiam.</p>     
        <Form
    name="basic"
  
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item

      // name="phoneNumber"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input addonBefore="+998" onChange={(e)=>setphoneValue(phoneFormatter(e.target.value))}  name='phoneNumber' value={phoneValue}  />
    </Form.Item>

    <Form.Item
      // name="password"
      rules={[ 
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password ref={passwordRef} name='password' />
    </Form.Item>


    <Form.Item
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>
  )
}

export default Login