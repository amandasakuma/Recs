class UserSerializer < ActiveModel::Serializer
  attributes :username, :bio, :profile_pic, :email
  has_many :posts
end
