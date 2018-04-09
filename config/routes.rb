Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get 'pages/blogdetail'
  get 'pages/blog'
  get 'pages/video'
  get 'pages/blogdetail2'
  get 'pages/blogdetail3'
  get 'pages/blogdetail4'
  get 'pages/tech1'
  get 'pages/tech2'

  resources "contacts", only: [:new, :create]
end
