const bordersleft = [
  "border-start border-primary",
  "border-start border-secondary",
  "border-start border-success",
  "border-start border-info",
  "border-start border-warning",
  "border-start border-danger",
  "border-start border-dark",
];
const bordersbottom = [
  "border-bottom border-primary",
  "border-bottom border-secondary",
  "border-bottom border-success",
  "border-bottom border-info",
  "border-bottom border-warning",
  "border-bottom border-danger",
  "border-bottom border-dark",
];
const Border = () => {
  return (
    <div className="container-fluid bg-gray-100">
      <p className="display-6">Border Utilities</p>
      <p className="text-muted">
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>
      <div className="row justify-content-center p-3">
        <div className="col-12 col-lg-6">
            {bordersleft.map((ele) => <div className={`${ele} bg-light p-5 my-3 rounded shadow`}>{ele}</div>)}
        </div>

        <div className="col-12 col-lg-6">
            {bordersbottom.map((ele) => <div className={`${ele} bg-light p-5 my-3 rounded shadow`}>{ele}</div>)}
        </div>

      </div>
      <p className='text-muted text-center p-4 bg-light'>Copyright © Your Website 2020</p>
    </div>
  );
};
export default Border;
