Rails.application.routes.draw do
  resources :users 
  resources :posts

  # post "/login", to: "auth#create"
  get "/profile", to: "users#profile"
end
