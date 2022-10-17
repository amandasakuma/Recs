class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :login, :profile, :userPosts, :update]

#/signup
    def create 
        @user = User.create!(user_params)
        token = JWT.encode({user_id: @user.id}, secret_key)
        render json: {user: @user, token: token}
    end 

#for /me
    def show 
        render json: {user: @current_user}
    end 

    def profile 
        render json: find_user, status: :ok
    end 

#can become user profile pages
    # def index 
    #     render json: User.all 
    # end 

    def userPosts
        posts = @current_user.profile_posts
        render json: posts
    end 

    def login 
        @user = User.find_by(username: params[:username])
        if (@user && @user.authenticate(params[:password]))
            token = JWT.encode({user_id: @user.id}, secret_key)
            render json: {user: @user, token: token}
        end
    end 

    # def update 
    #     curr_user = logged_in_user
    #     if curr_user
    #         curr_user.update!(update_user_params)
    #         render curr_user
    #     else
    #         render json: {error: "User not found"}, status: :not_found
    #     end
    # end 

    def update
        @current_user.update!(update_user_params)
        render json: @user
    end

    def logout 
        @current_user = nil 
        head :no_content
    end 

    private     
    def user_params 
        params.permit(:username, :email, :password)
    end 

    def update_user_params 
        params.permit(:username, :email, :profile_pic, :bio)
    end 

    def find_user 
        User.find_by!(id: params[:id])
    end 

end


    # def profile 
    #     render json: {user: UserSerialize.new(current_user) }, status: :accepted
    # end 

    # def create
    #     @user = User.create!(user_params)
    #     if @user.valid?
    #         @token = encode_token(user_id: @user.id)
    #         render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    #     else
    #         render json: { error: 'failed to create user' }, status: :unprocessable_entity
    #     end
    # end