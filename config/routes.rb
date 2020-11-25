Rails.application.routes.draw do
  root 'landing#index'

  get '/' => 'landing#index'

  get 'profile/u/:username/:source' => 'profilify#fetch'
  get 'profiles/:source' => 'profilify#list'
  get 'post/:post_id' => 'profilify#get_post'
  get 'posts/:username/:source' => 'profilify#list_post'

  post 'profile/new' => 'profilify#create'
  post 'profile/edit' => 'profilify#edit'
  post 'toggle-like' => 'profilify#handle_like'
  post 'post/new' => 'profilify#new_post'
  post 'post/:id/edit' => 'profilify#edit_post'
  
  post 'user/login' => 'user#login'
  post 'user/register' => 'user#register'

  get '/*page' => 'landing#index'
end
