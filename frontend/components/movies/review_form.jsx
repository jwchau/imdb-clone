import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // e.preventDefault();
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    //review object {review: {body: "words", movieId: 2, userId: 5} }
    e.preventDefault();
    const review = {
      body: this.state.body,
      movieId: this.props.movieId,
      userId: this.props.userId
    };
    this.props.postReview(review);
    this.setState({body: ""});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          onChange={this.handleChange}
          value={this.state.body}>
        </textarea>
        <input type="submit"/>
      </form>
    );
  }


};

export default ReviewForm;