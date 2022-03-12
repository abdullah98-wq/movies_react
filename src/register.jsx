import { axios } from 'axios';
import React, { Component } from 'react'

class Register extends Component {
    state = { 
    
    userName:'',
    password:'',
     } 
     RegisterFormChange=(e)=>{
        let state={...this.state};
       // console.log(e.target.value)
        state[e.target.name]=e.target.value;
        this.setState({state});
     }
     sendRegisterData  = async() =>{
       let response=  await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users',this.state)
     }
     SubmitRegister=(e)=>{
         e.preventDefault();
         this.sendRegisterData();
     }
    render() { 
        return (<>
        <h1>register</h1>
            <form onSubmit={this.SubmitRegister}>

              <label htmlFor="">user name</label>
              <input name="userName" onChange={this.RegisterFormChange} value={this.state.userName} type="text" className="form-control" />

              <label htmlFor="">password</label>
              <input name="password" onChange={this.RegisterFormChange} value={this.state.password} type="password" className="form-control"/>
               <button type='submit' className='btn btn-info'>submit</button>
            </form>
            </>  );
    }
}
 
export default Register;