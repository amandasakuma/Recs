class UserSerializer < ActiveModel::Serializer
  attributes :id, :username 
# :bio, :profile_pic, :email
  has_many :posts
end
