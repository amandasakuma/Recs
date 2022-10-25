class PostsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create]


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


private 

    def post_params 
        params.permit(:hed, :dek, :content, :draft, :pub_date, :user_id, :photo, :link)
    end

    def find_post
        Post.find_by!(id: params[:id])
    end 

    #   def liked?(current_user)

    #   !!Post.likes.find{|like|like.user_id == current_user.id}
 
    #  end




end
