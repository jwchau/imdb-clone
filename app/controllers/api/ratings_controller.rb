class Api::RatingsController < ApplicationController

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  private

  def rating_params
    params.require(:rating).permit(:score, :userId, :movieId)
  end
end
