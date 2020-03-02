class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score
  belongs_to :movie
  belongs_to :user
end
