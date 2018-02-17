import React from 'react';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';

class CreateAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			isAuthorized : false,
			Email : null,
			Password : null,
			FullName : null,
			CBUName : null,
			MobileNumber : null,
			CBUType : null,
			Designation : null,
			WorkStation : null,
      imgSrc : 'data:image/png;base64,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'

		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
    this.onImageSelect = this.onImageSelect.bind(this);
		};

	onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  	}

	onSubmit(e) {
  	e.preventDefault();
  	console.log("State :",this.state);
  	this.context.router.history.push('/');
  	}

  onImageSelect(e) {
       e.preventDefault();
    var file = e.target.files[0];
  var reader = new FileReader();
  var url = reader.readAsDataURL(file);
  reader.onloadend = () => {
      this.setState({imgSrc:reader.result})
  }
   reader.readAsDataURL(file)
}
	// componentWillMount(){
	// if (!this.props.isAuthorized || this.props.isAuthorized.length == 0) {
	// 	this.context.router.history.push('/');
	// }
  //}

render() {
		return (
			<div>
			<div>
				<h4>Create an account</h4>
			</div>

	<form onSubmit={this.onSubmit}>
  <div className="form-row">

    <div className="form-group ">
    <img 
    className="form-group img-thumbnail"
    src={this.state.imgSrc} 
    width="150" 
    height="150"
    />
    <input 
        className="form-control-file "
        ref="file" 
        type="file" 
        multiple="false"
        onChange={this.onImageSelect}
        />
    </div>
    
    </div>
		
    <div className="form-row">

    	<div className="form-group col-md-6 ">
      	<label htmlFor="Email">Email</label>
      	<input onChange={this.onChange} type="email" className="form-control" id="Email" placeholder="example : hites_297@yahoo.co.in"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="Password">Password</label>
      	<input onChange={this.onChange} type="password" className="form-control" id="Password" placeholder="Password"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="FullName">Full Name</label>
      	<input onChange={this.onChange} type="text" className="form-control" id="FullName" placeholder="Hitesh Patel"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="CBUName">CBU Name</label>
      	<input onChange={this.onChange} type="text" className="form-control" id="CBUName" placeholder="5/3"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="MobileNumber">Mobile Number</label>
      	<input onChange={this.onChange} type="number" className="form-control" id="MobileNumber" placeholder="8105729963"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="CBUType">CBU Type</label>
      	<input onChange={this.onChange} type="text" className="form-control" id="CBUType" placeholder=""/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="Designation">Designation</label>
      	<input onChange={this.onChange} type="text" className="form-control" id="Designation" placeholder="Engineer Software"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="WorkStation">Workstation</label>
      	<input onChange={this.onChange} type="password" className="form-control" id="WorkStation" placeholder="SLK1-ODC-4-099"/>
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
  <div>{this.props.isAuthorized.value} </div>
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