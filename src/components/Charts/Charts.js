import bar from '../../assets/bar.JPG';
import graph from '../../assets/graph.JPG';
import pie from '../../assets/pie.JPG';
const Charts = () => {
  return (
    <div className="container-fluid bg-gray-100">
      <p className="display-6">Charts</p>
      <p className="text-muted">
        Chart.js is a third party plugin that is used to generate in this theme.
        The charts below have been customized - for further customization
        options, please visit the official Chart.js documentation.
      </p>
      <div className="row justify-content-center p-3">

        <div className=" col-lg-8">
          <div className=" shadow-lg bg-white rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Area Chart</div>
            <div className="pb-2">
                <img src={graph} width="100%" alt='graph'/>
            </div>
            <p className="text-muted px-4 pb-4">Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js file.</code></p>
          </div>
          <br/>
          <div className=" shadow-lg bg-white rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Bar Chart</div>
            <div className="pb-2">
                <img src={bar} width="100%" alt='bar'/>
            </div>
            <p className="text-muted px-4 pb-4">Styling for the bar chart can be found in the <code>/js/demo/chart-bar-demo.js file.</code></p>
          </div>
        </div>

        <div className=" col-lg-4">
          <div className=" shadow-lg bg-white rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Donut Chart</div>
            <div className="pb-2">
                <img src={pie} width="100%" alt='pie'/>
            </div>
            <p className="text-muted px-4 pb-4">Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js file.</code></p>
          </div>
        </div>

      </div>
      <p className='text-muted text-center p-4 bg-light'>Copyright © Your Website 2020</p>
    </div>
  );
};
export default Charts;
