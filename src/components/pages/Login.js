import login from '../../assets/login.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import './inp.css';
const Login = () =>{
    return (
        <Layout className='row' img= {login}>
            <form>
                <p className="h3 text-center mb-4"> Welcom back!</p>
                <input type='text' className='inp form-control mb-3' placeholder="Enter Email Address..."/>
                <input type='text' className='inp form-control mb-3' placeholder="Password"/>
                <input type='checkbox' className='mb-3'/>
                <label className="text-muted px-2 mb-4"> Remember Me</label>
                <button className='btn btn-primary form-control mb-1'> Login</button>
                <hr/>
                <button className='btn btn-danger form-control mt-1 mb-3' style={{color:'white'}}><i className="fab fa-google fa-fw"></i>Login with Google</button>
                <button className='btn btn-primary form-control mb-1' style={{color:'white'}}><i className="fab fa-facebook-f fa-fw"></i>Login with Facebook</button>


                <hr/>




            
                <p className='link text-center'>Forget Password?</p>
                <p className='link text-center'>Create an Account!</p>
            </form>
        </Layout>
    );
}
export default Login;
