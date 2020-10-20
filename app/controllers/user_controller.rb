class UserController < ApplicationController
  def login
    user = User.find_by(username: extract_params(:user, :username))
    render json: { success: false, error: 'Account doesnt exist' } and return if user.blank? 
    set_user(user&.id, true)
    render json: authenticate!
  end

  def register
    user = User.new user_params
    render json: { success: false, error: user.errors.full_messages.first } and return unless user.valid?
    user.save!
    set_user(user&.id, false)
    render json: authenticate!
  end

private

  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :email, :password, :mobile)
  end
end
