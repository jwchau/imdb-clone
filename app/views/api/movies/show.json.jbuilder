json.movie do 
  json.extract! @movie, :id, :title, :year, :score
  json.posterUrl url_for(@movie.poster) if @movie.poster.attached?
  json.trailerUrl url_for(@movie.trailer) if @movie.trailer.attached?
end

# debugger

json.set! :reviews, {}
json.reviews do
  @movie.reviews.each do |review|
    json.set! review.id do 
      json.extract! review, :body, :user_id, :id
    end
  end
end

json.set! :ratings, {}
json.ratings do
  @movie.ratings.each do |rating|
    json.set! rating.id do 
      json.extract! rating, :score, :user_id
    end
  end
end


json.set! :users, {}
json.users do
  @movie.reviewers.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end