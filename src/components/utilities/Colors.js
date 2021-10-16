const greyscale = [
  "text-gray-100",
  "text-gray-200",
  "text-gray-300",
  "text-gray-400",
  "text-gray-500",
  "text-gray-600",
  "text-gray-700",
  "text-gray-800",
  "text-gray-900",
];
const backgroung = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-info",
  "bg-warning",
  "bg-danger",
  "bg-light text-dark",
  "bg-dark",
];
const greyback = [
    "bg-gray-100",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
    "bg-gray-600",
    "bg-gray-700",
    "bg-gray-800",
    "bg-gray-900",
  ];
const Colors = () => {
  return (
    <div className="container-fluid bg-gray-100">
      <p className="display-6">Color Utilities</p>
      <p className="text-muted">
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>
      <div className="row justify-content-center p-3">

        <div className="col-12 col-lg-4">
          <div className=" shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary  rounded">Custom Text Color Utilities</div>
            <div className='p-4'>{greyscale.map((ele) => (<p className={ele}>{ele}</p>))}</div>
          </div>
          <br />
          <div className=" shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Custom Font Size Utilities</div>
            <div className='p-4'><p className="text-xs">text-xs</p><p className="text-lg">text-lg</p></div>
          </div>
        </div>
        
        <div className="col-12 col-lg-4">
            <div className="shadow bg-light rounded">
                <div className="bg-blue-100 p-3 text-primary rounded">Custom Background Gradient Utilities</div>
                <div className='p-4'>{backgroung.map((ele) => (<div className={`${ele} p-5 text-light`}>{ele}</div>))}</div>
            </div>
        </div>
        
        <div className="col-12 col-lg-4 ">
            <div className='shadow bg-light rounded'>
                <div className="bg-blue-100 p-3 text-primary rounded ">Custom Grayscale Background Utilities</div>
                <div className='p-4'>{greyback.map((ele) => (<div className={`${ele} p-3 text-light`}>{ele}</div>))}</div>
            </div>
        </div>

      </div>
      <p className='text-muted text-center p-4 bg-light'>Copyright © Your Website 2020</p>
    </div>
  );
};
export default Colors;
