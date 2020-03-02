class MediaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :link #placeholder until I learn AWS
  belongs_to :entity #`Movie` or `Person`
end
