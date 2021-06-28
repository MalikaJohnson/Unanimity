Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :lists do
    resources :comments, only: :create
  end
  resources :comments, except: :create
end
