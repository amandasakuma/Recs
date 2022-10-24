class LikesController < ApplicationController
    

    def index 
        render json: Like.all
    end

    def create
        post = Post.find(params[:post_id])
        like = Like.create!(user_id: @current_user.id, post_id: post.id)
        render json: like
    end 

    def destroy 
        @like = current_user.likes.find(params[:id])
        @like.destroy
    end 

private 
    def find_post 
        @post = Post.find(params[:post_id])
    end 

    # def already_liked?
    #     SocialInteraction.where(user_id: current_user.id, post_id: params[:post_id]).exists?
    # end 

end
