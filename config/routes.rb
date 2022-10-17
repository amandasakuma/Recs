Rails.application.routes.draw do
  resources :users 
  resources :posts



  post "/signup", to: "users#create"
  post "/login", to: "users#login"
  get "/me", to: "users#show"
  post '/logout', to: 'users#logout'


  get "/profile", to: "users#profile"
  get '/profile/posts', to: "users#userPosts"
  get '/posts', to: "posts#show"

  patch "profile/about", to: "users#update"
  # get 'users', to: "users#show"
end
