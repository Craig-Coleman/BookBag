class PublisherSerializer < ActiveModel::Serializer
  attributes :id, :title, :year_established, :primary_genre, :image
end
