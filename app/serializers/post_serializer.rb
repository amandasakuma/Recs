class PostSerializer < ActiveModel::Serializer
  attributes :id, :hed, :dek, :content, :draft, :pub_date, :pretty_time, :like_count, :liked, :photo, :link
  belongs_to :user
  has_many :likes
  has_many :tags
end
