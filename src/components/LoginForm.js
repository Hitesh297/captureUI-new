	import React from 'react';


export default	class LoginForm extends React.Component {
		render() {
			return (
				
				<form className="form-signin">

				<div className ="text-center mb-4">
				<img className="mb-4" src={'https://cdn2.iconfinder.com/data/icons/images-and-video/36/27_camera_photo_video_capture_device_focus_flash_photography-512.png'} alt="" width="150" height="150"/>
				<h1 className="h3 mb-3 font-weight-normal">SLK Capture</h1>
				</div>


				<div className="form-label-group">				
				<input className="form-control" type="email" placeholder="Email address" autoFocus/>
				<label htmlFor="inputEmail">Email address</label>
				</div> 


				<div className="form-label-group">
        		<input type="password" id="inputPassword" className="form-control" placeholder="Password" />
        		<label htmlFor="inputPassword">Password </label>
      			</div>


      			<div className="checkbox mb-3">
      			<label>
          		<input type="checkbox" value="remember-me"/> Remember me
          		</label>
      			</div>


      			<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      			<p className="mt-5 mb-3 text-muted text-center">&copy; 2018-2019</p>

				
				</form>
				

				);
		}
	} 