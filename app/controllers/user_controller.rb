class UserController < ApplicationController
  def login
    user = User.find_by(username: extract_params(:user, :username))
    set_user(user&.id)
    render json: authenticate!
  end

  def register
    user = User.create!(user_params)
    set_user(user.id)
    render json: authenticate!
  end

private

  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :email, :password, :mobile)
  end
end
