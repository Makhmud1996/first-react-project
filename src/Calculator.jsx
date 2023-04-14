import React, { Component } from 'react'

 class Calculator extends Component {
    constructor(props){
        super(props)
        this.state={
            dollar:null,
            sum:null,
        }
    }

  render() {
    
    

    const onChange = e =>{
        console.log(e.target.value);
        this.setState((previous)=>({...previous, dollar:+e.target.value}))
    }

    const transfer = () =>{
        // console.log(15000*this.state.dollar +'sum');
        let result=15000*this.state.dollar +'sum'
        this.setState(previous=>({...previous,sum:result}))
    }
    return (
      <div>
        Dollar kiriting <input type="number" placeholder='Enter dollar' onChange={onChange} /> 1 dollar Ozbek somida 15000ga teng.{' '}
         <button onClick={transfer}>Transfer</button> 
         <hr />
         {this.state.sum && this.state.dollar ?(

         <p>siz kiritgan {this.state.dollar}$ ozbek somida {this.state.sum}ga teng</p>
         ):(
            " "
         )}

        
      </div>
    )
    }
}

export default Calculator