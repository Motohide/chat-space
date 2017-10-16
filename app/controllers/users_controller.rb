class UsersController < ApplicationController
  before_action :user_find, only: [:edit, :update]

  def edit
  end

  def update
   if @user.update(user_params)
     redirect_to :root
   else
    render 'edit'
   end
  end

   private
   def user_params
     params.require(:user).permit(:name, :email,)
   end

   def user_find
     @user = User.find(params[:id])
   end
end
