# IMDB Clone

Clone of the website Imdb.com: a site where users can create accounts, look up movie information, post reviews about movies, post ratings about movies, form watchlist lists containing movies, etc.

## Getting Started

Project is not reproducable on local machine due to the use of personalized API keys. An online version hosted in Herokuapp is accessable and functional through [mi-imdb](http://mi-imdb.herokuapp.com)

### Prerequisites

* rbenv
* Ruby
* Ruby on Rails
* NPM
* Postgresql

### Cloning

* Clone project using git clone https://github.com/jwchau/fullstackproject or download directly from github
* run `npm install` and `bundle install`
* open code using prefered text editor

### Let's take a look

## screenshots
![main-page](https://github.com/jwchau/imdb-clone/blob/master/github_readme/main-page.png)
![login](https://github.com/jwchau/imdb-clone/blob/master/github_readme/login.png)
![movie-show](https://github.com/jwchau/imdb-clone/blob/master/github_readme/movie-show.png)

## code
```
  movieItems() {
    const caroItems = [];
    for (let i = 0; i < this.movies.length; i++) {
      const movie = this.movies[i];
      caroItems.push(
        <Carousel.Item key={i}>
          <BillboardItem key={movie.id} movie={movie}/>
        </Carousel.Item>
      );
    }
    return caroItems;
  }
```
The carousel is a react element of billboard items

```
  handleSubmit(e) {
    e.preventDefault();
    let {username, email, password} = this.state;
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    this.setState({username: "", password: "", email: ""});
  }
```
Login and Signup form use the same react component passed in as processForm(<user>)


## Challenges

* Due to the large amount of data this project naturally encompasses I needed a programmative solution to seed the database.
* The Active Storage and AWS S3 implementation was very buggy and I still don't full understand the inner workings of how rails does it's magic.
* HTML structure and CSS matching were difficult because imdb.com is not very reliant on React.js so I had to create, yet imitate the same look the original site has.

## Author

* **John Chau** - [github](https://github.com/jwchau)

## My thoughts about the project

* Overall I felt it was a great learning experience for fullstack implementation.
* The repetition of React/Redux -> Rails pattern really help drill the frontend to backend integration pattern.
* I felt a little slow during development and didn't get to finish as much functionality as I thought I would.
* As I continue this project I will update my thoughts about it.

