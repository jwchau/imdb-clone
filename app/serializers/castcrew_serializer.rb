class CastcrewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :role
  belongs_to :person
  belongs_to :movie
end
