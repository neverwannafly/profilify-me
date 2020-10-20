class User < ApplicationRecord
  has_secure_password :password, validations: false
  before_save :set_auth_token
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :password_digest, presence: true

  def name
    "#{self.first_name} #{self.last_name}"
  end

  def basic_data
    {
      username: self.username,
      mobile: self.mobile,
      name: self.name,
      email: self.email,
      id: self.id,
      token: self.token,
    }
  end

private

  def set_auth_token
    self.token = SecureRandom.hex
  end
end
