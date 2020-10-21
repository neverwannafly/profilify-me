Rails.application.routes.draw do
  root 'landing#index'

  get '/' => 'landing#index'

  post 'profile' => 'profilify#fetch'
  post 'profile/new' => 'profilify#create'
  
  post 'user/login' => 'user#login'
  post 'user/register' => 'user#register'

  get '/*username' => 'landing#index'
end
