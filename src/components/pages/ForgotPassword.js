import forgotpass from '../../assets/forgotpass.JPG';
import Layout from './Layout';
import './inp.css';
const ForgotPassword = () =>{
return (
    <Layout className='row' img= {forgotpass}>
        <form>
            <p className="h3 text-center mb-4">Forgot Your Password?</p>
            <p className='text-center text-muted'> We get it, stuff happens. just enter your email address below and we'll send you alink to reset your Password!</p>
      
            <input type='text' className='inp form-control mb-3' placeholder="Enter Email Address..."/>
            <button className='btn btn-primary form-control mb-1'>Reset Password</button>
            <hr/>
            <p className='link text-center'>Create an Account!</p>
            <p className='link text-center'>Already have an account? Login!</p>
        </form>
    </Layout>
);
};

export default ForgotPassword;