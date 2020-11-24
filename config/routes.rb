Rails.application.routes.draw do
  root 'landing#index'

  get '/' => 'landing#index'
  get '/*page' => 'landing#index'
end
