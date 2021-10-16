const navbar=  <nav class="navbar navbar-expand navbar-light bg-light mb-4">
    <p class="navbar-brand" href="#">Navbar</p>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown"role="button" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false">Dropdown</p>
        <div class="dropdown-menu dropdown-menu-right animated--grow-in" aria-labelledby="navbarDropdown">
            <p class="dropdown-item" href="#">Action</p>
            <p class="dropdown-item" href="#">Another action</p>
            <div class="dropdown-divider"></div>
            <p class="dropdown-item" href="#">Something else here</p>
        </div>
    </li>
</ul>
</nav>;
const Animations = () => {
  return (
    <div className="container-fluid bg-gray-100">
      <p className="display-6">Animation Utilities</p>
      <p className="text-muted">
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>
      <div className="row justify-content-center p-3">

        <div className="col-12 col-lg-6 mb-3">
          <div className=" bg-light rounded">
            <div className="bg-blue-50 p-3 text-primary rounded"> Grow In Animation Utilty</div>
            <div className="p-3">
              <p className="text-danger my-4 px-2">.animated--grow-in</p>
              <p className="text-muted">Navbar Dropdown Example:</p>
              {navbar}
              <p className="text-muted small">
                Note: This utility animates the CSS transform property, meaning
                it will override any existing transforms on an element being
                animated! In this theme, the grow in animation is only being
                used on dropdowns within the navbar.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
        <div className=" bg-light rounded">
            <div className="bg-blue-50 p-3 text-primary rounded"> Fade In Animation Utilty</div>
            <div className="p-3">
              <p className="text-danger my-4 px-2">.animated--fade-in</p>
              <p className="text-muted">Navbar Dropdown Example:</p>
              {navbar}
              <p className="text-muted small">
              Note: This utility animates the CSS opacity property, 
              meaning it will override any existing opacity on an element being animated!
              </p>
            </div>
          </div>
        </div>

      </div>
      <p className='text-muted text-center p-4 bg-light'>Copyright © Your Website 2020</p>
    </div>
  );
};
export default Animations;
