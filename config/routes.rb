Rails.application.routes.draw do
  root 'landing#index'

  get 'landing/index' => 'landing#index'
  
  post 'user/login' => 'user#login'
  post 'user/register' => 'user#register'
end
