class ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy, :add_list]
  before_action :authorize_request, only: [ :show, :create, :update, :index, :destroy]

  # GET /lists
  def index
    @lists = List.all

    render json: @lists, include: :user
  end

  # GET /lists/1
  def show
    render json: @list, include: :comments
      # {include::user}}
  end

  #POST /lists
  def create
    @list = List.new(list_params)
    @list.user = @current_user

    if @list.save
      render json: @list, status: :created
    else
      render json: @list.errors, status: :unprocessable_entity
    end
    
  end

  # PATCH/PUT /list/1
  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /list/1
  def destroy
    @list.destroy
  end

  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def list_params
      params.require(:list).permit(:input_1, :input_2, :input_3, :user_id)
    end
end
