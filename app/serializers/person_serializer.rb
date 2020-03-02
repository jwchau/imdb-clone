class PersonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :birthdate
  has_many :movies #through castcrew source movies
  has_many :roles #through castcrew on roles
end
