Rails.application.routes.draw do
  
   namespace :api do
  	namespace :v1 do 
  		resources :items, only: [:index, :create, :destroy, :update]
  	end
  end

  get '/items', to: 'site#index'
  root to: 'site#index'
  #route that hits a controller that renders the view( index.html.erb)

end
