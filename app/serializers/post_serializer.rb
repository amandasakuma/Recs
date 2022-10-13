class PostSerializer < ActiveModel::Serializer
  attributes :id, :author, :hed, :dek, :content, :draft, :pub_date
end
