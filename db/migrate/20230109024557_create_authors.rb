class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :best_seller
      t.integer :books_published
      t.string :image

      t.timestamps
    end
  end
end
