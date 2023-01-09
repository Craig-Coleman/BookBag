Rails.application.routes.draw do
  resources :users, except: [:index] 
  resources :authors,  only: [:index] 
  resources :books, except: [:show] 
  resources :publishers, only: [:index]


  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
