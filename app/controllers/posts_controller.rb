class PostsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create]

    def index 
        render json: Post.all, status: :ok
    end

    def show 
        render json: find_post, status: :ok
    end

    def create 
        post = Post.create!(post_params)
        render json: post
    end 

private 

    def post_params 
        params.permit(:hed, :dek, :content, :draft, :pub_date, :user_id)
    end

    def find_post
        Post.find_by!(id: params[:id])
    end 


end
