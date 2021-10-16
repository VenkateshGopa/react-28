import './inp.css';
const NotFound = () =>{
    return(
        <div className='container-fluid text-center'>
        <p className='err text-muted'>404</p>
        <p className='notfound text-muted mb-3'>Page Not Found</p>

        <p className='text-muted mb-5'>It looks like you found a glitch in the matrix...</p>
        <footer className="text-muted">Copyright © Your Website 2020</footer>
        </div>
    );
}
export default NotFound;