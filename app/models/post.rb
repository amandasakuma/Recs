class Post < ApplicationRecord
  belongs_to :user
  # belongs_to :following
  # belongs_to :followers
  # has_many :tags
  has_many :likes, dependent: :destroy
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true

  def author 
    User.find(self.user_id)
  end 

  def pretty_time
    self.created_at.strftime('%b %d %Y %I:%M%p')
  end

  def like_count 
    self.likes.count
  end 

  def liked()
      !!self.likes.find{|like|like.user_id == user.id}
  end

  def self.food_tag
    Post.all.where(tags: "food/dining")
  end 





end
