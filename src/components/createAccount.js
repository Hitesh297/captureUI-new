import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';

class CreateAccount extends Component {
	constructor(props) {
		super(props);
		this.state={
			isAuthorized : false
		};
		};

componentWillMount(){
	console.log("control entered componentWillMount");
	if ( ! this.props.isAuthorized) {
		this.context.router.history.push('/');
	}
}

render() {
		return (
			<div>
			<div>
				<h4>Create an account</h4>

			</div>
	<form>
		<div className="form-row">
    	<div className="form-group col-md-6">
      	<label htmlFor="inputEmail4">Email</label>
      	<input type="email" className="form-control" id="inputEmail4" placeholder="example : hites_297@yahoo.co.in"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="inputPassword4">Password</label>
      	<input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="inputFullName">Full Name</label>
      	<input type="text" className="form-control" id="inputFullName" placeholder="Hitesh Patel"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="inputCBUName">CBU Name</label>
      	<input type="text" className="form-control" id="inputCBUName" placeholder="5/3"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="inputMobileNumber">Mobile Number</label>
      	<input type="number" className="form-control" id="inputMobileNumber" placeholder="8105729963"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="inputCBUType">CBU Type</label>
      	<input type="text" className="form-control" id="inputCBUType" placeholder=""/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="inputDesignation">Designation</label>
      	<input type="text" className="form-control" id="inputDesignation" placeholder="Engineer Software"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="inputWorkStation">Workstation</label>
      	<input type="password" className="form-control" id="inputWorkStation" placeholder="SLK1-ODC-4-099"/>
    	</div>

		<div className="form-group">
    		<div className="form-check">
      			<input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      				<label className="form-check-label" htmlFor="invalidCheck2">
        				Agree to terms and conditions
      				</label>
    		</div>
  		</div>

	</div>
  <button className="btn btn-primary" type="submit">Submit</button>
	</form>
	</div>
			);
	}
}

CreateAccount.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps({isAuthorized}) {
  return {isAuthorized};
}

export default connect(mapStateToProps)(CreateAccount);