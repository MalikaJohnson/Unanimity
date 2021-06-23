class User < ApplicationRecord
  has_many :lists, dependent: :destroy
  has_many :comments, dependent: :destroy
  
  has_secure_password
  validates :password, length: { minimum: 6 }
  validates :username, uniqueness: true, presence: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  
end
