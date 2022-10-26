class TagsController < ApplicationController
 skip_before_action :authorized, only: [:index, :create]

    def index 
        render json: Tag.all, status: :ok
    end 

    def create 
        tag = Tag.create!(tag_params)
        render json: tag
    end 

private

    def tag_params 
        params.permit(:post_id, :tag)
    end 

end
