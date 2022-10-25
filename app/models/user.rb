class User < ApplicationRecord
    before_save { self.email = email.downcase }
    has_secure_password
    has_many :likes, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :active_follows, class_name: "Follow", 
                            foreign_key: "follower_id",
                            dependent: :destroy
    has_many :passive_follows, class_name: "Follow",
                            foreign_key: "followed_id",
                            dependent: :destroy 

    has_many :following, through: :active_follows, source: :followed
    has_many :followers, through: :passive_follows, source: :follower


    validates :username, length: {maximum: 50}, 
        uniqueness: {case_sensitive: false}
    validates :email, presence: true, length: {maximum: 250}, 
        uniqueness: {case_sensitive: false}
    # validates :password, presence: true

    def profile_posts 
        # self.posts.all
        Post.all.where(user_id: self.id)
    end 



    def following_count
        self.following.count
    end 

    def follower_count
        self.followers.count
    end 
    
end
