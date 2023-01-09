class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :best_seller, :books_published, :image
end
