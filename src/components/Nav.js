import { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
const [show , setshow] = useState({comp:false , utili:false , pages:false});
const showcomphandler = () =>{
    setshow({comp:true , utili:false , pages:false});
}
const showutilhandler =() =>{
    setshow({comp:false , utili:true , pages:false});
}
const showpagehandler =() =>{
    setshow({comp:false , utili:false , pages:true});

}
  return (
    <>
    <div className='container-fluid bg-light h3 text-center sticky-top'><i className="fas fa-laugh-wink center" style={{color:'black'}}></i> SB Admin<sup> 2</sup></div>
    <div className="row">
      <div className="col-3 col-lg-1 bg-primary ">
        <nav className="nav d-flex flex-column py-4">
        <li className='d-flex justify-content-center pl-2'><i className="fas fa-laugh-wink center"></i></li>
        <hr/>
        <NavLink to="/Dashboard" activeClassName="active" className="navlnk text-center">
        <li className='d-flex justify-content-center pl-2'><i className="fas fa-fw fa-tachometer-alt center"></i></li>
        <span className='te'>Dashboard</span>
        </NavLink>
        
        <hr/>
        <span className='pl-2 te text-center '>INTERFACE</span>
        <li className='d-flex justify-content-center pl-2 mt-3' onClick={showcomphandler}><i className="fas fa-fw fa-cog center "></i></li>
        <span className='pl-2 te text-center'>Components</span>
        { show.comp && <div className='bg-white rounded ml-2 mt-2'>
        <NavLink to="/Button" activeClassName="active" className="navlnk text-center">
        <p className='text-center '>Buttons</p>
        </NavLink>
        <NavLink to="/Cards" activeClassName="active" className="navlnk text-center ">
        <p className='text-center '>Cards</p>
        </NavLink>
        </div>}
        <br/>
        <li className='d-flex justify-content-center pl-2' onClick={showutilhandler}><i className="fas fa-fw fa-wrench center"></i></li>
        <span className='pl-2 te text-center'>Utilities</span>
        { show.utili &&<div className='bg-white rounded ml-2 mt-2'>
        <NavLink to="/Colors" activeClassName="active" className="navlnk text-center">
        <p className='text-center '>Colors</p>
        </NavLink>
        <NavLink to="/Borders" activeClassName="active" className="navlnk text-center ">
        <p className='text-center '>Borders</p>
        </NavLink>
        <NavLink to="/Animations" activeClassName="active" className="navlnk text-center">
        <p className='text-center '>Animations</p>
        </NavLink>
        <NavLink to="/Other" activeClassName="active" className="navlnk text-center ">
        <p className='text-center '>Other</p>
        </NavLink>
        </div>}
        <hr/>
        <span className='pl-2 mb-3 te text-center '>ADDONS</span>
    
        <li className='d-flex justify-content-center pl-2'onClick={showpagehandler}><i className="fas fa-fw fa-folder center "></i></li>
        <span className='pl-2 te text-center'>Pages</span>
        { show.pages &&<div className='bg-white rounded ml-2 mt-2'>
        <NavLink to="/login" activeClassName="active" className="navlnk text-center">
        <p className='text-center '>Login</p>
        </NavLink>
        <NavLink to="/Register" activeClassName="active" className="navlnk text-center ">
        <p className='text-center '>Register</p>
        </NavLink>
        <NavLink to="/forgotpassword" activeClassName="active" className="navlnk text-center">
        <p className='text-center '>Forgotpassword</p>
        </NavLink>
        <NavLink to="/blankpage" activeClassName="active" className="navlnk text-center ">
        <p className='text-center '>BlankPage</p>
        </NavLink>
        <NavLink to="/notfound" activeClassName="active" className="navlnk text-center ">
        <p className='text-center '>404 Page</p>
        </NavLink>
        </div>}
        <NavLink to="/Charts" activeClassName="active" className="navlnk text-center ">
        <li className='d-flex justify-content-center mt-3 pl-2'><i className="fas fa-fw fa-chart-area center"></i></li>
        <span className='pl-2 te text-center'>Charts</span>
        </NavLink>
        </nav>
      </div>
      <span className="col-9 col-lg-11">{props.children}</span>
    </div>
    </>
  );
};
export default Nav;
