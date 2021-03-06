class Api::V1::ItemsController < Api::V1::BaseController
	respond_to :json
 def index 
  respond_with :api, :v1, Item.all
  #redirect_to rooth_path
 end
 
 def create
  respond_with :api, :v1, Item.create(item_params) ### using namespace method cuz we in nested folders
 end

 def destroy 
 	respond_with Item.destroy(params[:id])
 end 

 def update
  item = Item.find(params["id"])
  item.update_attributes(item_params)
  respond_with item, json: item 
end

private 
	def item_params 
		params.require(:item).permit(:id, :name, :description) 
	end
end
