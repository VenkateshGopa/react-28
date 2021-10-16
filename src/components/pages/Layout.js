import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={`container-fluid ${classes.blue}`}>.
      <div className={`${classes.box} ${props.className} `}>
        <div className="col-lg-6">
        <img className={classes.img} id='img' src={props.img} alt="login" />
        </div>
        <div className= {`col-12 col-lg-6 ${classes.mform} `}>
            {props.children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
