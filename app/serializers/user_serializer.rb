class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :follower_count, :following_count
  has_many :posts
  # has_many :followers
  # has_many :following

end
