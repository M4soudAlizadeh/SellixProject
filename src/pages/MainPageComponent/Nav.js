import classes from "./Nav.module.css";
import "font-awesome/css/font-awesome.min.css";

const Nav = () => {
  return (
    <nav className={classes["MainPage__Nav"]}>
      <div className={classes["MainPage__Nav--Items"]}>
        <a href="_">
          <h1>Sellix</h1>
        </a>
        <ul className={classes["MainPage__Nav--Items-List"]}>
          <a href="_">
            <li>Features</li>
          </a>
          <a href="_">
            <li>Pricing</li>
          </a>
          <a href="_">
            <li>Fees</li>
          </a>
          <a href="_">
            <li>Resources</li>
          </a>
          <a href="_">
            <li>Blog</li>
          </a>
          <a href="_">
            <li>Stories</li>
          </a>
          <a href="_">
            <li>ICOs</li>
          </a>
          <a href="_">
            <li>Sellix-Pay</li>
          </a>
        </ul>
      </div>
      <div className={classes["MainPage__Nav--btns"]}>
        <button>Login</button>
        <button>
          Get Started<i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <div className={classes["MainPage__Nav--bars"]}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};
export default Nav;
