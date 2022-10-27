class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :login, :show, :index, :following]

#/signup
    def create 
        @user = User.create!(user_params)
        token = JWT.encode({user_id: @user.id}, secret_key)
        render json: {user: @user, token: token}
    end 


    def my_profile 
        render json: @current_user
    end 

#/me
    # def show
    #     render json: logged_in_user
    # end 

#edit profile
    def update
        puts "hello #{@current_user}"
        user = @current_user.update!(update_user_params)
        render json: user
    end

#profile posts
    def userPosts
        posts = find_user.profile_posts
        render json: posts
    end 



#delete account
    def destroy
        @current_user.destroy 
        head :no_content
    end 

    def index 
        render json: User.all
    end 


    def login 
        @user = User.find_by(username: params[:username])
        if (@user && @user.authenticate(params[:password]))
            token = JWT.encode({user_id: @user.id}, secret_key)
            render json: {user: @user, token: token}
        end
    end 

#note to self: may not need this?
    def logout 
        @current_user = nil 
        head :no_content
    end 

    def following

        @user = User.find(params[:id])
        users = @user.following
        render json: users

    end 

    def followers 
        @user = User.find(params[:id])
        @users = @user.followers
        render json: @users
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

    # def update 
    #     curr_user = logged_in_user
    #     if curr_user
    #         curr_user.update!(update_user_params)
    #         render curr_user
    #     else
    #         render json: {error: "User not found"}, status: :not_found
    #     end
    # end 