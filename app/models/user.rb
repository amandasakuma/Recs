class User < ApplicationRecord
    before_save { self.email = email.downcase }
    has_secure_password
    has_many :posts, dependent: :destroy
    validates :username, length: {maximum: 50}, 
        uniqueness: {case_sensitive: false}
    validates :email, presence: true, length: {maximum: 250}, 
        uniqueness: {case_sensitive: false}
    # validates :password, presence: true
    
end
