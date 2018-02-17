import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<div className="">



    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <a className="navbar-brand" href="#">SLK Capture</a>

		<div className="navbar-collapse offcanvas-collapse" id="navbar">
        	<ul className="navbar-nav mr-auto">
          		<li className="nav-item active">
            	<a className="nav-link" href="#">Dashboard </a>
          		</li>
          	</ul>
      
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
        </nav>

        <main role="main" className="container">

        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-grey rounded box-shadow">
        <img className="mr-3" src="https://cdn2.iconfinder.com/data/icons/images-and-video/36/27_camera_photo_video_capture_device_focus_flash_photography-512.png" alt="" width="48" height="48"/>
        <div className="lh-100">
          <h5 className="mb-0 text-white lh-100">Speak your mind out, let's make this world a better place to live.</h5>  
        </div>
      	</div>


      	  <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-gray pb-2 mb-0">Recent updates</h6>
        </div>


        <ul className="list-unstyled">
        <li>
        <div className="my-3 p-3 bg-white rounded box-shadow">

          <p className="media-body pb-3 mb-0 small lh-125  border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
         </div>
         </li>
         <li>
         <div className="my-3 p-3 bg-white rounded box-shadow">
          <p className="media-body pb-3 mb-0 small lh-125 border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
        </li>
        </ul>

        </main>
				
			</div>
			);
	}
}