import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component{

	render(){
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		console.log(title);
		return(
			<form onSubmit={handleSubmit(this.props.createPost)} >
				<h3>Create a New Post</h3>
				<div className="form-group">
					<div className="form-group">
						<label>Title</label>
						<input type="text" className="form-control" {...title} />
						<div className="text-help">
							{title.touched ? title.error : ''}
						</div>
					</div>
					<div className="form-group">
						<label>Categories</label>
						<input type="text" className="form-control" {...categories} />
					</div>
					<div className="form-group">
						<label>Content</label>
						<textarea type="text" className="form-control" {...content} />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</form>
		);
	}
}

function validate(values){
	const errors = {};

	if(!values.title){
		errors.title = 'Enter an username';
	}

	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);
