class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :profile_img, :bio
  has_many :posts
end
