import {api} from "../api"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export const Login=()=>{
		const navigate = useNavigate();
	const signin=async()=>{

	const password=document.getElementById("your_pass").value;
	const username=document.getElementById("your_name").value;
	console.log(username,password);
const data=	await axios.get(`${api}/api/user/user`, {
		 headers: {
    "Content-Type": "application/json"
  },
		// withCredentials: true,
  			auth: {
    				username: username,
   			 	password: password
  				}
			});
		if(data.status){
			localStorage.setItem("username", username)
			localStorage.setItem("password", password
			)
		}
		console.log("yeep");
	        navigate('/home');
	}
return (

    <div className="main">
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="images/Back.png" alt="sing up image" style={{borderRadius: 4+"%"}}/></figure> 
                        <a href="./Register.html" className="signup-image-link">Create an account</a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form  className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                        </form>
                            <div className="form-group form-button">
                                <button onClick={signin} name="signin" id="signin" className="form-submit" style={{backgroundColor: "#27ae60"}}>Log in</button>
			</div>	<div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

)
}
