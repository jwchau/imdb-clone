class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body
  belongs_to :movie
  belongs_to :user
end
