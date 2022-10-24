class LikesController < ApplicationController

    # def index 

    # end

    # def create 
    #     like = @post.likes.create(user_id: current_user.id)
    #     render json: like
    # end 

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
