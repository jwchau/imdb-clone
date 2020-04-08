class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(
      body: params[:review][:body],
      movie_id: params[:review][:movieId],
      user_id: params[:review][:userId]
    )
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
    
    
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all.where(movie_id: params[:movie_id].to_i);
    render :index
  end

  def update
    # debugger
    @review = Review.find_by(id: params[:review][:id])
    if @review.update(body: params[:review][:body])
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end


end
