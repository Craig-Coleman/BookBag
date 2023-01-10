class Book < ApplicationRecord
    belongs_to :publisher
    belongs_to :author 
    belongs_to :user
    
    accepts_nested_attributes_for :publisher, reject_if: :all_blank
    accepts_nested_attributes_for :author, reject_if: :all_blank

    validates :title, { presence: true, length: { in: 1..30 } }  
    validates :author, presence: true 
    validates :length, { presence: true, numericality: { only_integer: true} }
    validates :year_published, { presence: true, numericality: { only_integer: true } }

end
