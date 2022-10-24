class Like < ApplicationRecord
    belongs_to :user 
    belongs_to :post
    validates :user_id, uniqueness: {scope: :post_id}

    # def user_liked
    #     !!self.find(user_id)
    # end
end
