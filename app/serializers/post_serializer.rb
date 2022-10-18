class PostSerializer < ActiveModel::Serializer
  attributes :id, :hed, :dek, :content, :draft, :pub_date, :pretty_time
  belongs_to :user
end
