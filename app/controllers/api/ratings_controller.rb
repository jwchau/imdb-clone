class Api::RatingsController < ApplicationController

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def update 
    @rating = Rating.find_by(id: params[:rating][:id])
    if @rating.update(rating_params)
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  private

  def rating_params
    params.require(:rating).permit(:score, :user_id, :movie_id)
  end
end
