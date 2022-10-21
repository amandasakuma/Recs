class ProfilesController < ApplicationController
    skip_before_action :authorized, only: [:show]

#all users
    def index 
        render json: User.all
    end 


    def show 
        render json: find_user
    end 

#profile posts
    def userPosts
        posts = @current_user.profile_posts
        render json: posts
    end 
private 

    def find_user 
        User.find_by!(id: params[:id])
    end 

end
