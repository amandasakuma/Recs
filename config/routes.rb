Rails.application.routes.draw do
  resources :users  do 
      member do
        get :following, :followers
      end
    end

# scope ':username' do
#   resources :profiles, only: [:show]
# end

  resources :posts
  resources :likes, only: [:create]
  resources :profiles
  post "/signup", to: "users#create"
  post "/login", to: "users#login"
  post '/logout', to: 'users#logout'


  get "/profile", to: "users#profile"
  get '/profile/:id/posts', to: "users#userPosts"
  get '/posts', to: "posts#show"



  put '/post/:id/like', to: 'posts#like', as: 'like'

  patch "profile/about", to: "users#update"
  # get 'profiles/:username/', to: "profiles#show"
  delete 'profile/users/:id', to: "users#destroy"

end
