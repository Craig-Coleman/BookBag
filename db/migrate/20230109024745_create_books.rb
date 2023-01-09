class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :length
      t.integer :year_published
      t.integer :user_id
      t.integer :publisher_id
      t.integer :author_id
      t.string :cover
      t.string :description

      t.timestamps
    end
  end
end
