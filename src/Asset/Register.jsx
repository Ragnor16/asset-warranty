
import React, {useState} from "react" 
// import Header from './Header'
// import './LR.css'


const Register =(props) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('')
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(email);    
    }
    // <Header />

    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            
            <label htmlfor='name'>FullName</label>
            <input value={name} type='name' placeholder="Your name" id="name" name="name" />
            <label htmlfor="email">Email</label>
            <input value={email} type='email' placeholder="Your email" id="email" name="email" />
            <label htmlfor="password">password</label>
            <input value={password} type='password' placeholder="*********" id="password" name="password"/>
<button>Log IN</button>

        </form>
        <button className= "link-btn" onClick={()=>props.onFormSwitch('login')}>Already have a account? Login Here</button>
        </div>
    )
    }
export default Register