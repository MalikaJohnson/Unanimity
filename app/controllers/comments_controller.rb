class CommentsController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :index ]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /users/1
  # def show
  #   render json: @user
  # end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
    
  end

  # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  # private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :list_id, :user_id)
    end

end
