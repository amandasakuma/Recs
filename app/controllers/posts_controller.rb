class PostsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create, :food_posts]


    def index 
        user = @current_user
        render json: Post.all, status: :ok
    end

    def show 
        render json: find_post, status: :ok
    end

    def create 
        post = Post.create!(post_params)
        render json: post
    end 

    def like 
        @post = Post.all.find(params[:id])
        Like.create(user_id: current_user.id, post_id: @post_id)
    end 

    def update 
        post = Post.find_by(id: params[:id])
        post.update!(post_params)
        render json: post
    end 

    def food_posts 
        food_tag = Post.all.where(tags: "food/dining")
        render json: food_tag
    end 

    # def following_posts 
    #     # follow_feed = Post.all.where("user.id =?", @current_user.following.id)
    #     follow_feed = Post.all.where(self.user.id === @current_user.following.id)
    #     render json: follow_feed
    # end 

private 

    def post_params 
        params.permit(:hed, :dek, :content, :draft, :pub_date, :user_id, :photo, :link, :tags)
    end

    def find_post
        Post.find_by!(id: params[:id])
    end 

    #   def liked?(current_user)

    #   !!Post.likes.find{|like|like.user_id == current_user.id}
 
    #  end




end
