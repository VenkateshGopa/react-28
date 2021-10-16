const buttonicon = [
  { icon: <i className="fab fa-facebook-f" style={{color:'white'}}></i>, color: "primary" },
  { icon: <i className="fas fa-check" style={{color:'white'}}></i>, color: "success" },
  { icon: <i className="fas fa-info-circle" style={{color:'white'}}></i>, color: "info" },
  { icon: <i className="fas fa-exclamation-triangle" style={{color:'white'}}></i>, color: "warning" },
  { icon: <i className="fas fa-trash" style={{color:'white'}}></i>, color: "danger" },
];
const Button = () => {
  return (
    <div className="container-fluid bg-gray-100">
      <p className="display-6">Buttons</p>
      <div className="row justify-content-center p-3">

        <div className="col-12 col-lg-6">
          <div className=" shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Circle Buttons</div>
            <div className='p-3'>
            <p className="text-muted">
              Use Font Awesome Icons (included with this theme package) along
              with the circle buttons as shown in the examples below!
            </p>
            <code>.btn-circle</code>
            <br/>
            {buttonicon.map((ele) => (<span class={`btn btn-${ele.color} btn-circle my-4 mx-2`}>{ele.icon}</span>))}
            <br/>
            <code>.btn-circle .btn-sm</code>
            <br/>
            {buttonicon.map((ele) => (<span class={`btn btn-${ele.color} btn-circle my-4 mx-2 btn-sm`}>{ele.icon}</span>))}
            <br/>
            <code>.btn-circle .btn-lg</code>
            <br/>
            {buttonicon.map((ele) => (<span class={`btn btn-${ele.color} btn-circle my-4 mx-2 btn-lg`}>{ele.icon}</span>))}
            </div>
          </div>
          <br/>
          <div className="shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Brand Buttons</div>
            <div className='p-3'>
            <p className='text-muted'>Google and Facebook buttons are available featuring each company's 
            respective brand color. They are used on the user login and registration pages.</p>
            <p className='text-muted'>You can create more custom buttons by adding a 
            new color variable in the _variables.scss file and then using the Bootstrap
             button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
            <button className='btn bg-danger form-control rounded  mb-4' style={{color:'white'}}><i className="fab fa-google fa-fw"></i>.btn-Google</button>
            <button className='btn bg-primary form-control rounded ' style={{color:'white'}}><i className="fab fa-facebook-f fa-fw"></i>.btn-Facebook</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className=" shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Split Buttons with Icon</div>
            <div className='p-3'>
                <p className='text-muted'>Works with any button colors, just use the .btn-icon-split class and the
                     markup in the examples below. The examples below also use the .text-white-50 
                    helper class on the icons for additional styling, but it is not required.</p>
                {buttonicon.map((ele) => (<div className={`btn-${ele.color} btn-icon-split rounded my-3 py-2`}><span className='icon text-white-50 px-3'>{ele.icon}</span><span className={`bg-${ele.color}`}>{ele.color} button</span></div>))}
            </div>
          </div> 
        </div>

      </div>
      <p className='text-muted text-center p-4 bg-light'>Copyright © Your Website 2020</p>
    </div>
  );
};
export default Button;
