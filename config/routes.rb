Rails.application.routes.draw do
  # namespace :api do
    resources :tags
    resources :users  do 
        member do
          get :following, :followers
        end
      end

    resources :posts do 
      resources :likes 
    end

    resources :profiles
    resources :tags, only: [:index, :create]

    get "/me", to: "users#my_profile"
    get '/showprofiles/:username', to: "profiles#profile_page"

    get "/follow-feed", to: "posts#following_posts"

    get "/me/following", to: "users#following"

    get "/likes", to: "likes#index"
    get "/follows", to: "follows#index"

    get "/tags/food-dining", to: "tags#food"

    post "/signup", to: "users#create"
    post "/login", to: "users#login"
    post '/logout', to: 'users#logout'

    post "/create-like", to: "likes#create"
    post "/create-follow", to: "follows#create"

    delete "/unfollow", to: "follows#destroy"
  
    get '/posts', to: "posts#show"
    get '/post-tags/food', to: "posts#food_posts"


    post '/showlikes', to: 'posts#like', as: 'like'

    patch "profile/about", to: "users#update"
    patch "posts/:id", to: "posts#update"
  
    # delete 'profile/users/:id', to: "users#destroy"
    delete "/posts/:id", to: "posts#destroy"
    root "posts#index"
  # end

get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
