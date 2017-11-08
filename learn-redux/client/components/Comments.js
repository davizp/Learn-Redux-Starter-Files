import React, { Component } from 'react';

class Comments extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	renderComment(comment, index) {

		return (
			<div className="comment" key={ index }>
				<p>
					<strong>{ comment.user }</strong>
					{ comment.text }
					<button className="remove-comment">&times;</button>
				</p>
			</div>
		);
	}

	handleSubmit(event) {

		event.preventDefault();

		const { postId } = this.props.params;
		const author = this.author.value;
		const comment = this.comment.value;

		this.props.addComment( postId, author, comment );
	}

	render() {
		return (
			<div className="comments">
				{ this.props.postComments.map(this.renderComment) }
				<form ref={ form => { this.form = form; } } className="comment-form" onSubmit={ this.handleSubmit }>
					<input type="text" ref={ input => { this.author  = input; }} placeholder="author"/>
					<input type="text" ref={ input => { this.comment = input; }} placeholder="comment"/>
					<input type="submit" hidden/>
				</form>
			</div>
		);
	}
}

export default Comments;