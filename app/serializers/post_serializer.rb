class PostSerializer < ActiveModel::Serializer
  attributes :id, :author_id, :hed, :dek, :content, :draft, :pub_date
end
