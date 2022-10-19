class LikesController < ApplicationController
    # def create 
    #     social_interaction = SocialInteraction.create!(social_params)
    #     render json: social_interaction
    # end 

    def like 
        @post.social_interactions.create(user_id: current_user.id)
        redirect_to post_path(@post)
    end 

    def destroy 
        @like = current_user.likes.find(params[:id])
        @like.destroy
    end 

private 

    # def social_params 
    #     params.permit(:user_id, :post_id)
    # end 
    def find_post 
        @post = Post.find(params[:post_id])
    end 

    def already_liked?
        SocialInteraction.where(user_id: current_user.id, post_id: params[:post_id]).exists?
    end 

end
