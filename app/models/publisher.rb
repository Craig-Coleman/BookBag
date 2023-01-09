class Publisher < ApplicationRecord
    has_many :books
    has_many :users, through: :books

    validates :title, presence: true
    validates :year_established, { presence: true, numericality: { only_integer: true } }
    validates :primary_genre, presence: true
end

