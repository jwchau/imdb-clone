Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json} do
    resources :users, only: [ :create, :show ]
    resource :session, only: [ :create, :destroy ]
    resources :reviews, only: [ :update, :destroy ]
    resources :ratings, only: [ :update, :destroy ]
    resources :movies, only: [ :index, :show ] do
      resources :users, only: [ :index ]
      resources :reviews, only: [ :index, :create]
      resources :ratings, only: [ :index, :create ]
    end

    resource :tmdb, only: [ :show ]
    get "tmdb/search", to: "tmdbs#search"
    get "tmdb/details", to: "tmdbs#details"

  end


end
