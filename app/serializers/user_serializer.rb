class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :session_token, :password_digest
  has_many :reviews
  has_many :ratings
end
