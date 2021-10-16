import graph from '../assets/graph.JPG';
import pie from '../assets/pie.JPG';
import proj from '../assets/projects.JPG';
import illus from '../assets/illus.JPG';
const color1=["bg-primary","bg-success","bg-info","bg-warning"];
const color2 = ["bg-danger","bg-secondary","bg-light","bg-dark"];
const card =[
{
    name:"EARNINGS (MONTHLY)",
    value:"$40,000",
    logo : "fas fa-calendar pl-3 pt-4",
    color: "primary",

    name1:"EARNINGS (ANNUAL)",
    value1:"$215,000",
    logo1 : "fas fa-dollar-sign pl-3 pt-4",
    color1: "danger"
},
{
    name:"TASKS",
    value:"50%",
    logo : "fas fa-clipboard-list pl-3 pt-4",
    color: "info",

    name1:"PENDING REQUESTS",
    value1:"18",
    logo1 : "fas fa-comments pl-3 pt-4",
    color1: "warning"
}
];
const Dashboard = () =>{
    return(
    <div className="container-fluid bg-gray-100">
      <p className="display-6">Dashboard</p>

      { card.map(ele =>(
      <>
      <div className="row p-3">
          <div className={` col-lg-5 bg-white m-2 rounded shadow border-start border-${ele.color}`}>
              <div className='row'>
                  <div className='col-10 pt-3'>
                      <p className='pl-5'>{ele.name}</p>
                      <p className='pl-5'>{ele.value}</p>
                  </div>
                  <div className='col-2'>
                      <i className={`${ele.logo}`} style={{color:'black'}}></i>
                  </div>
          </div>
        </div>
          <div className={` col-lg-5 bg-white m-2 rounded shadow border-start border-${ele.color1}`}>
              <div className='row'>
                  <div className='col-10 pt-3'>
                      <p className='pl-5'>{ele.name1}</p>
                      <p className='pl-5'>{ele.value1}</p>
                  </div>
                  <div className='col-2'>
                      <i className={`${ele.logo1}`} style={{color:'black'}}></i>
                  </div>
              </div>
          </div>
      </div>
      </>
      ))}
    

      <div className="row justify-content-center p-3">

        <div className="col-11 col-lg-8">
          <div className=" shadow-lg bg-white rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Area Chart</div>
            <div className="pb-2">
                <img src={graph} width="100%" alt='graph'/>
            </div>
            <p className="text-muted px-4 pb-4">Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js file.</code></p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className=" shadow-lg bg-white rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Donut Chart</div>
            <div className="pb-2">
                <img src={pie} width="100%" alt='pie'/>
            </div>
            <p className="text-muted px-4 pb-4">Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js file.</code></p>
          </div>
        </div>

      </div>

      <div className="row justify-content-center p-3">
      <div className="col-lg-6">
          <div className=" shadow-lg bg-white rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Projects</div>
            <div className="pb-2">
                <img src={proj} width="100%" alt='proj'/>
            </div>
          </div>
          <div className='row'>
          <div className="col-lg-6">
              {color1.map( (ele) => <div className= {`${ele} m-3 p-4 rounded shadow text-white`}>{ele}</div>)}
          </div>
          <div className="col-lg-6">
              {color2.map( (ele) => <div className={`${ele} m-3 p-4 rounded shadow text-white`}>{ele}</div>)}
          </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className=" shadow-lg bg-white rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Illustrations</div>
            <div className="pb-2">
                <img src={illus} width="100%" alt='illus'/>
            </div>
            <p className="text-muted px-4 pb-4">Add some quality, svg illustrations to your project courtesy
             of unDraw, a constantly updated collection of beautiful svg images that you can use
              completely free and without attribution!</p>
          </div>

          <div className=" shadow-lg bg-white rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Development Approach</div>
            <p className="text-muted px-4 pb-4 pt-3">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order 
            to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and 
            custom utility classes.</p>
            <p className="text-muted px-4 pb-4">Before working with this theme, you should become familiar with the Bootstrap 
                framework, especially the utility classes.</p>
          </div>
        </div>

      </div>
      <p className='text-muted text-center p-4 bg-light'>Copyright © Your Website 2020</p>
    </div>
    );

}
export default Dashboard;