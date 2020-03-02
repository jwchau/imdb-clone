class DetailSerializer
  include FastJsonapi::ObjectSerializer
  attributes :runtime, :summary, :storyline, :synopsis,
    :website, :box_office, :company, :technical
  belongs_to :movie
end
