import Layout from "./Layout";
import register from "../../assets/register.JPG";
import './inp.css';
const Register = () => {
  return (
    <Layout className="row" img={register}>
        <form>
          <p className="h3 text-center mb-4"> Create an Account!</p>
          <div class="form-group row">
            <div class="col">
              <input type="text" class="inp form-control mb-3" placeholder="First Name"/>
            </div>
            <div class="col">
              <input type="text" class="inp form-control mb-3" placeholder="Last Name" />
            </div>
          </div>
          <input type="text" className="inp form-control mb-3" placeholder="Email Address"/>
          <div class="row">
            <div class="col">
              <input type="text" class="inp form-control mb-3" placeholder="Password"/>
            </div>
            <div class="col">
              <input type="text" class="inp form-control mb-3" placeholder="Repeat Password" />
            </div>
          </div>
          <button className="btn btn-primary form-control mb-1">Register Account</button>
          <hr />
          <button className='btn btn-danger form-control mt-1 mb-3' style={{color:'white'}}><i className="fab fa-google fa-fw"></i>Login with Google</button>
          <button className='btn btn-primary form-control mb-1' style={{color:'white'}}><i className="fab fa-facebook-f fa-fw"></i>Login with Facebook</button>
          <hr />
          <p className="link text-center">Forget Password?</p>
          <p className="link text-center">Already have an Account? Login!</p>
        </form>
    </Layout>
  );
};
export default Register;
