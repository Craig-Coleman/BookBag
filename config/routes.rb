Rails.application.routes.draw do
  resources :users 
  resources :authors 
  resources :books 
  resources :publishers


  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
