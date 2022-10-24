class PostSerializer < ActiveModel::Serializer
  attributes :id, :hed, :dek, :content, :draft, :pub_date, :pretty_time, :like_count, :liked
  belongs_to :user
  has_many :likes
end
