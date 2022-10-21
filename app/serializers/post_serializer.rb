class PostSerializer < ActiveModel::Serializer
  attributes :id, :hed, :dek, :content, :draft, :pub_date, :pretty_time, :author, :like_count
  belongs_to :user
  has_many :likes
end
