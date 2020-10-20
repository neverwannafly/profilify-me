class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :current_user, :authenticate!

  def set_user(user_id, refresh_token)
    return if user_id.blank?
    new_user = User.find_by(id: user_id)
    return if new_user.blank?
    new_user.save if refresh_token #generates a unique token on every login and signup.
    @current_user = new_user
  end

  def current_user
    user_id = extract_params(:user, :id)
    if user_id && user_token
      @current_user ||= User.find_by(:id => user_id)
    end
    return @current_user
  end

  def authenticate!
    is_valid = !!(current_user && current_user.authenticate(extract_params(:user, :password)))
    response = { success: is_valid, error: 'Authentication failed' }
    response = response.merge(current_user.basic_data) if is_valid
    return response
  end

  def validate_request
    user_id = extract_params(:user, :id)
    user_token = extract_params(:user, :token)
    return {success: false, error: 'Invalid Request'} unless user_id && user_token
  end

private

  def extract_params(namespace, attribute)
    params[namespace][attribute]
  end
end
