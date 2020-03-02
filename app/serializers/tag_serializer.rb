class TagSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :count #count is COUNT(taggings)
  has_many :taggings
end
