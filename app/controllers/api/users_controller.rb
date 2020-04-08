class Api::UsersController < ApplicationController

  def index
    #all reviews - Review.where(movie_id: params['movie_id'])
    @users = [];
    reviews = Review.where(movie_id: params['movie_id'])
    reviews.each do |review|
      @users.push(User.find_by(id: review.user_id))
    end
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render 'api/users/show'
    else
      render json: ['no user found'], status: 404
    end
  end

end
