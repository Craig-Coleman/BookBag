class Author < ApplicationRecord
    has_many :books
    has_many :users, through: :books

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :age, { presence: true, numericality: { only_integer: true } }

end
