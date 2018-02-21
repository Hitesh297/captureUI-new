import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { getPosts } from '../actions/authActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PostList from './postList';
import Popup from './popup';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			posts : [],
			showPopup: false
		};
		
		    this.props.getPosts('12345');
	}

	togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


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

        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-green rounded box-shadow">
        <img className="mr-3" src="https://cdn2.iconfinder.com/data/icons/images-and-video/36/27_camera_photo_video_capture_device_focus_flash_photography-512.png" alt="" width="48" height="48"/>
        <div className="lh-100">
          <h5 className="mb-0 text-white lh-100">Capture your thoughts, capture the moments. All at one place.</h5>  
        </div>
      	</div>

        <div className="my-3 p-3 bg-white rounded box-shadow">
        <form>

        <div className="form-group btn-group" role="group" aria-label="Basic example">
  		<button type="button" onClick={this.togglePopup.bind(this)} className="btn btn-link">Add Photos/Videos</button>
		</div>

		{this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }

  		<div className="form-group">
    	<textarea className="form-control" id="Textarea1" rows="3" placeholder="Update post here."></textarea>
  		</div>

  		<div className="row justify-content-end">
  		<div className="col-auto">
  		<button type="submit" className="btn btn-secondary form-control float-right">Post</button>
  		</div>
  		</div>
  		</form>
        </div>

        <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-gray pb-2 mb-0">Recent updates</h6>
        </div>

        <PostList posts = {this.props.posts} />

        </main>
				
			</div>
			);
	}
}
function mapStateToProps({posts}) {
  return {posts};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPosts},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(App);