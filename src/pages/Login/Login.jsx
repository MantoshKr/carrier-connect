import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import "../Signup/Signup.css"
import { ImGoogle } from 'react-icons/im';
import userImage from '../../assets/user.png'




const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Navigate = useNavigate();
  const { user ,logIn } = UserAuth();
   
  
  
  const handleSubmit = async (e) => {
      e.preventDefault('')
      try {
          await logIn(email,password)
          Navigate('/')
      } catch (error) {
          console.log(error)
      
      }
  };
  

return (
  <>
  <div className='main'>
                <p className='carrier-connect'>CarrierConnect</p>
                {/* <img src={logo} alt="logo" className="ccLogo" /> */}



                <div className='sign-up-form' >

                    <img src={userImage} alt="user" />
                    <h1>Sign in</h1>
                    <p>Stay updated on your professional world</p>
                    


                    <hr className="divider" />




                    <form onSubmit={handleSubmit}>



                      

                        <input onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }

                        }

                            type="email" placeholder="Enter your email" className="input-box" />
                        <input onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }

                        }
                            type="password" placeholder="Choose your password" className="input-box" />




                        {/* <p id='terms' > <span><input type='checkbox' className='checkbox' /> </span>  By clicking Agree & Join, you agree to the CarrierConnect User Agreement, Privacy Policy, and Cookie Policy.</p> */}


                        <button type="submit" className="signup-btn">Login</button>


                    </form>

                    <div className='or-divider'>
                        <hr className="divider-line" />
                        <span className="or-text">or</span>
                        <hr className="divider-line" />
                    </div>


                    <div className="google-signup">
                        <button className="google-btn" >
                            <span className="google-icon"><ImGoogle /></span>
                            Login with Google
                        </button>
                    </div>




                    <Link to='/Signup'>
                        <p id="login" >Sign Up for CarrierConnect? </p>
                    </Link>

                </div>
            </div>

  </>
)
}

export default Login