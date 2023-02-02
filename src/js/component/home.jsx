import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
<body>
			  <nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
				  <a className="navbar-brand" href="">
					<img src="https://w0.peakpx.com/wallpaper/749/474/HD-wallpaper-nike-black-logo-logos.jpg" alt="Logo" width="150" height="100" className="d-inline-block align-text-top">
					</img>
				  </a>
          		<a className="nav-link" aria-current="page" href="#">Home</a>
          		<a className="nav-link" href="#">Features</a>
          		<a className="nav-link" href="#">Pricing</a>
				</div>
			  </nav>
	<div className="carouselhead">
	<div id="carouselExampleAutoplaying" className="carousel-slide" data-bs-ride="carousel" >
  		<div className="carousel-inner">
    		<div  id="foto1"className="carousel-item active" data-bs-interval="1000">
      			<img id="foto1" src="https://images.pexels.com/photos/8258043/pexels-photo-8258043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."></img>
    </div>
    	<div id="foto2" className="carousel-item" data-bs-interval="1000" >
      		<img  src="https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."></img>
    	</div>
    	<div id="foto3" className="carousel-item" data-bs-interval="1000"> 
      		<img  src="https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."></img>
    	</div>
  	</div>
  	<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    	<span className="visually-hidden">Previous</span>
  	</button>
  	<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
   		<span className="carousel-control-next-icon" aria-hidden="true"></span>
    	<span className="visually-hidden">Next</span>
  	</button>
	</div>
	</div>
	<div><p className="h1">Our Sports</p></div>
	<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Futbol</h5>
        <p class="card-text">"Mejora tu juego con nuestro equipo de futbol de alta calidad. Botas cómodas, balones precisos y ropa técnica para mejorar tus habilidades. ¡Compra ahora y domina el campo!"</p>
      </div>
      <div class="card-footer">
	  <button className="shadow__btn" href="" >See Products</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=800" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Padel</h5>
        <p class="card-text">"Eleva tu juego de pádel con nuestro equipo de alta calidad. Raquetas ligeras y equilibradas, pelotas de primera clase y accesorios de apoyo. ¡Compra hoy y siente la diferencia en el campo!"</p>
      </div>
      <div class="card-footer">
	  <button className="shadow__btn" href="" >See Products</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/1332237/pexels-photo-1332237.jpeg?auto=compress&cs=tinysrgb&w=800" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Basketball</h5>
        <p className="card-text">"Domina la cancha con nuestro equipo de baloncesto de alta calidad. Zapatillas cómodas, pelotas de bote perfecto y ropa técnica para mejorar tus habilidades. ¡Compra hoy y conviértete en el rey del aro!"</p>
      </div>
      <div className="card-footer">
	  <button className="shadow__btn" href="" >See Products</button>
      </div>
    </div>
  </div>
</div>

<footer>
  <p>Copyright © 2023 Mi sitio web</p>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Acerca de</a>
    <a href="#">Contacto</a>
  </nav>
</footer>






</body>			
			);
		  };
		  
		
		  
		  
		  

export default Home;
