class Post < ApplicationRecord
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true

  # def author 
  #   User.find(self.user_id)
  # end 

  def pretty_time
    self.created_at.strftime('%b %d %Y %I:%M%p')
  end



end
