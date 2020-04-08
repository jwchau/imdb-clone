@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :body, :user_id, :id
  end
end