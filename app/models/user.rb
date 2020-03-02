# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :session_token, :password_digest, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token 

    attr_reader :password

    def self.find_by_credentials(user_params)
        user = User.find_by(username: user_params[:username])
        user && user.is_password?(user_params[:password]) ? user : nil
    end

    def ensure_session_token
        self.session_token = SecureRandom::urlsafe_base64
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        update!(session_token: SecureRandom::urlsafe_base64)
        session_token
    end

    has_many :reviews

    has_many :ratings
    
end
