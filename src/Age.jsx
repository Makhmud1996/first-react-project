import React, { Component } from 'react'

 class Age extends Component {

    constructor(props){
        super(props)
        this.state={
            age:null,
            year:null,
        }
    }




  render() {

    const onChange = e =>{
        console.log(e.target.value);
        this.setState((previous)=>({...previous,age:+e.target.value}))
    }

    const transfer=()=>{
        let result=2023-this.state.age
        this.setState(previous=>({...previous,year:result}))

    }

    return (
      
      <div><h1>Yoshni Aniqlovchi Dastur Tuzilsin!!! </h1>
        Tugulgan sanangizni kiriting <input type="number" onChange={onChange} /> 
        <button onClick={transfer}>Transfer</button>
        <hr />
        {this.state.age?(
            <p>siz {this.state.year} Yoshdasiz</p>
        ):(
            " "
        )}
       </div>
    )
  }
}


export default Age