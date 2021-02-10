require 'httparty'

class Api::TmdbsController < ApplicationController
  include HTTParty
  @@key = ENV['TMDB_KEY']

  def show 
    query = params[:query]
    type = params[:type]

    request = HTTParty.get("https://api.themoviedb.org/3/#{type}/#{query}?api_key=#{@@key}&language=en-US&page=1").to_json
    render json: JSON.parse(request)
  end

  def search
    query = params[:query]
    type = params[:type]

    request = HTTParty.get("https://api.themoviedb.org/3/search/#{type}?api_key=#{@@key}&language=en-US&query=#{query}&page=1&include_adult=false")
    render json: JSON.parse(request)
  end

  def details
    id = params[:id]
    type = params[:type]
    option = params[:option] != '' ? '/' + params[:option] : ''
    lang = params[:lang] != '' ? '&language=' + params[:lang] : ''

    req = "https://api.themoviedb.org/3/#{type}/#{id}#{option}" + "?api_key=#{@@key}#{lang}"

    request = HTTParty.get(req)
    render json: request
  end

  def tmdb_params
    params.require(:tmdb).permit(:query, :type)
  end
end
