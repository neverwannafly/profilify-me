class User < ApplicationRecord
  has_secure_password :password, validations: false
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :password, presence: true

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
    }
  end
end
