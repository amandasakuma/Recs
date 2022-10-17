class ApplicationController < ActionController::API
    # rescue_from User::NotAuthorized, with: :deny_access
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    # protect_from_forgery with: :null_session
    before_action :authorized

    def secret_key
        Rails.application.credentials.secret_key
    end


    def logged_in_user 
        headers = request.headers['Authorization']
        if(headers)
            token = headers.split(' ')[1]
            current_id = JWT.decode(token, secret_key, true, algorithm: 'HS256')
            @current_user = User.find_by(id: current_id[0]["user_id"])
            @current_user
        end
    end 

    def authorized 
        puts "checking... #{logged_in_user}"
        render json: { message: 'Please log in' }, status: :unauthorized unless !!logged_in_user
    end 

private 

    # def deny_access 
    #     head :forbidden
    # end 

    def unprocessable_entity(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found 
        render json: {"error": "not found"}, status: 404
    end 
end

#      def current_user 
#         if decoded_token
#             user_id = decoded_token[0]['user_id']
#             @user = User.find_by(id: user_id)
#         end
#    end

#     def encode_token(payload)
#         JWT.encode(payload, 'my_s3cr3t', 'HS256')
#     end

#     def auth_header
#         request.headers['Authorization']
#     end 

#     def decoded_token
#         if auth_header
#                 token = auth_header.split(' ')[1]
#             begin
#                 JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
#             rescue JWT::DecodeError 
#                 nil
#             end
#         end
#     end

# 

#     def logged_in? 
#         !!current_user
#     end 

#     def authorized
#         render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
#     end
