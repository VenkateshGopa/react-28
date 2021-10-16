import '../pages/inp.css';
const Other = () => {
  return (
    <div className="container-fluid bg-gray-100">
      <p className="display-6">Other Utilities</p>
      <p className="text-muted">
      Bootstrap's default utility classes can be found on
      the official Bootstrap Documentation page. The custom 
      utilities below were created to extend this theme past 
      the default utility classes built into Bootstrap's framework.
      </p>
      <div className="row justify-content-center p-3">

      <div className="col-12 col-lg-6">
          <div className="shadow bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary  rounded">Overflow Hidden Utilty</div>
            <div className='p-4'>Use .o-hidden to set the overflow property of any element to hidden.</div>
          </div>
          <br />
          <div className=" shadow bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Progress Small Utility</div>
            <div class="card mb-4">
                <div class="card-body">
                    <div class="mb-1 ">Normal Progress Bar</div>
                    <div class="progress mb-4">
                        <div class="progress-bar" role="progressbar"></div>
                    </div>
                    <div class="mb-1 small">Small Progress Bar</div>
                    <div class="progress progress-sm mb-2">
                        <div class="progress-bar" role="progressbar" ></div>
                    </div>
                    Use the <code>.progress-sm</code> class along with <code>.progress</code></div>
                </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="shadow bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Rotation Utilities</div>
            <div className='p-4'>Use .o-hidden to set the overflow property of any element to hidden.</div>
            <div class="text-center pb-4">
                <div class=" trans bg-primary text-white p-3 d-inline-block my-4">.rotate-15</div>
                <hr/>
                <div class="transf bg-primary text-white p-3 d-inline-block my-4 ">.rotate-n-15</div>
            </div>
          </div>
        </div>

      </div>
      <p className='text-muted text-center p-4 bg-light'>Copyright © Your Website 2020</p>
    </div>
  );
};
export default Other;
