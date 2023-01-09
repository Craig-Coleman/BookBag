class User < ApplicationRecord
    has_many :books
    has_many :publishers, through: :books
    has_many :authors, through: :books

    validates :username, { presence: true, uniqueness: true, length: { in: 6..20 } } 
    # validates :first_name, presence: true
    # validates :last_name, presence: true
    # validates :email, presence: true

    has_secure_password
end
