@ratings.each do |rating|
  json.set! rating.id do 
    json.extract! rating, :score, :user_id, :movie_id
  end
end