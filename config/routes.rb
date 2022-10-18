Rails.application.routes.draw do
  resources :users 
  resources :posts


  post "/signup", to: "users#create"
  post "/login", to: "users#login"
  post '/logout', to: 'users#logout'


  get "/profile", to: "users#profile"
  get '/profile/posts', to: "users#userPosts"
  get '/posts', to: "posts#show"

  patch "profile/about", to: "users#update"
  get 'profile/:id', to: "users#show"
  delete 'profile/users/:id', to: "users#destroy"

end
