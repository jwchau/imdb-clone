class Api::MoviesController < ApplicationController

  def show
    @movie = Movie.find_by(id: params[:id])
    render :show
  end

  def index 
    # if (query) @movies.select { |movie| movie.includes?(query) }
    query = params[:query]
    if query
      @movies = Movie.all
        .where("title ILIKE ?", "%#{query}%")
    else
      @movies = Movie.all
    end

    render :index
  end

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end
