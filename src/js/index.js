//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

const LandingPage = () => {
    return (
      <nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
				  <a className="navbar-brand" href="">
					<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/40055/image-upload/Screenshot_2022_02_16_at_9_30_14_am_copy.jpg" alt="Logo" width="70" height="70" className="d-inline-block align-text-top">
					</img>
				  </a>
				</div>
			  </nav>
			);
		  };
		  

  
  export default LandingPage;