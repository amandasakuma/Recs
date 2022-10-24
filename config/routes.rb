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

  get "/likes", to: "likes#index"
  get "/follows", to: "follows#index"

  post "/signup", to: "users#create"
  post "/login", to: "users#login"
  post '/logout', to: 'users#logout'

  post "/create-like", to: "likes#create"
  post "/create-follow", to: "follows#create"

  delete "/unfollow", to: "follows#destroy"
 
  # get '/profile/:id/posts', to: "users#userPosts"
  get '/posts', to: "posts#show"



  post '/showlikes', to: 'posts#like', as: 'like'

  patch "profile/about", to: "users#update"
 
  # delete 'profile/users/:id', to: "users#destroy"

end
