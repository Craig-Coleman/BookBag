class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :length, :year_published, :user_id, :publisher_id, :author_id, :cover, :description

  belongs_to :publisher
end
