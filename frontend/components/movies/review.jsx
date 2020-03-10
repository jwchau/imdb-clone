import React from 'react';
import { Link } from 'react-router-dom';

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

  reviewOrEdit() {
    let {userId, review} = this.props;
    if (userId !== review.userId) return (<div>{review.body}</div>);
    else if (this.state.showEdit === false)
      return (
        <div>
          {review.body}
          <button onClick={this.toggleEdit}>Edit</button>
        </div>
      );
    else {
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} value={this.state.body}></textarea>
          <input type="submit" value="submit edits"/>
        </form>
      )
    }
  }

  render() {
    let { userId, username, rating } = this.props;
    return (
      <div className='review'>
        {this.reviewOrEdit()}
        {rating ? <p>{rating}</p> : <p>no rating</p>}
        <Link to={`/users/${userId}`}>{username}</Link>
      </div>
    );
  }
}

export default Review;