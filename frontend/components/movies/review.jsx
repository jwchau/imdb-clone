import React from 'react';
import { Link } from 'react-router-dom';
// import ReviewForm from './review_form';


class Review extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showEdit: false,
      body: this.props.review.body,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.reviewOrEdit = this.reviewOrEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }


  toggleEdit(e) {
    e.preventDefault();
    this.setState({showEdit: !this.state.showEdit});
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      body: this.state.body,
      id: this.props.review.id,
    };
    this.props.submitEdits(review);
    this.setState({showEdit: false});
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeReview(this.props.review.id);
  }

  reviewOrEdit() {
    let {userId, review} = this.props;
    if (userId !== review.userId) return null;
    else if (this.state.showEdit === false)
      return (
        <div>
          <div
            className='grey-hover regular-button'
            onClick={this.toggleEdit}>
            <p>Edit</p>
          </div>
          <div 
            className='grey-hover regular-button'
            onClick={this.handleRemove}>
            <p>Delete</p>
          </div>
        </div>
      );
    else {
      return (
        <div className='review-form'>
          <form onSubmit={this.handleSubmit}>
            <textarea
              id='edit-review'
              onChange={this.handleChange}
              value={this.state.body}></textarea>
            <input type="submit" value="Submit Edits" />
          </form>
        </div>
      )
    }
  }

  render() {
    let { userId, username, rating, review } = this.props;
    return (
      <div className='review'>
        <div id='review-info' className='showedit'>
          <Link to={`/users/${userId}`}>{username}</Link>
          {rating ? <p>Rating: {rating}</p> : <p>Rating: N/A</p>}
          {(this.state.showEdit)
            ? null 
            : <div className='review-body'>{review.body}
          </div>}
        </div>
        {this.reviewOrEdit()}
      </div>
    );
  }
}

export default Review;