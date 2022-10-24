Rails.application.routes.draw do
  resources :users  do 
      member do
        get :following, :followers
      end
    end

# scope ':username' do
#   resources :profiles, only: [:show]
# end


  resources :posts do 
    resources :likes 
  end


  resources :profiles

  get "/me", to: "users#my_profile"
  get '/showprofiles/:username', to: "profiles#profile_page"

  post "/signup", to: "users#create"
  post "/login", to: "users#login"
  post '/logout', to: 'users#logout'


 
  # get '/profile/:id/posts', to: "users#userPosts"
  get '/posts', to: "posts#show"



  # put '/post/:id/like', to: 'posts#like', as: 'like'

  patch "profile/about", to: "users#update"
 
  # delete 'profile/users/:id', to: "users#destroy"

end
