
const Cards = () =>{
return(
    <div className="container-fluid bg-gray-100">
      <p className="display-6">Cards</p>
      <div className="row justify-content-center p-3">

      <div className="col-12 col-lg-6">
          <div className=" shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Default Card Example</div>
            <div className='text muted p-3'>This card uses Bootstrap's default styling with no utility classes added. 
            Global styles are the only things modifying the look and feel of this default card example.</div>
          </div>
          <br/>
          <div className=" shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Basic Card Example</div>
            <p className='text muted p-3'>The styling for this basic card example is created by using default
             Bootstrap utility classes. By using utility classes, the style of the card component can be easily 
             modified with no need for any custom CSS!</p>
          </div>
      </div>

      <div className="col-12 col-lg-6">
          <div className=" shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Dropdown Card Example</div>
            <div className='text muted p-3'>The styling for this basic card example is created by using default Bootstrap 
            utility classes. By using utility classes, the style of the card component can be easily modified with no need 
            for any custom CSS!</div>
          </div>
          <br/>
          <div className=" shadow-lg bg-light rounded">
            <div className="bg-blue-100 p-3 text-primary rounded">Collapsable Card Example</div>
            <p className='text muted p-3'>Dropdown menus can be placed in the card header in order to extend the 
            functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the 
            card header can be clicked on in order to toggle a dropdown menu.</p>
          </div>
      </div>

      </div>
      <p className='text-muted text-center p-4 bg-light'>Copyright © Your Website 2020</p>
    </div>
);
}

export default Cards;