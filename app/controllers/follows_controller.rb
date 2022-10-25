class FollowsController < ApplicationController

    def index 
        render json: Follow.all
    end

    def create 
        user = User.find(params[:followed_id])
        follow = Follow.create!(followed_id: user.id, follower_id:@current_user.id)
        render json: follow
    end 


    # def destroy
    #     follow = Follow.find_by(followed_id:params[:id], follower_id:@current_user.id)
    #     follow.destroy
    #     head :no_content
    # end 

    # def destroy 
    #     @user = Follow.find(params[:id]).followed
    #     @current_user.unfollow(@user)
    # end 

    def destroy 
        @follow = current_user.follows.find(params[:id])
        @follow.destroy
    end 


end
