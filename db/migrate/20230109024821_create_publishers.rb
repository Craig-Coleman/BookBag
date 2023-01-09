class CreatePublishers < ActiveRecord::Migration[6.1]
  def change
    create_table :publishers do |t|
      t.string :title
      t.integer :year_established
      t.string :primary_genre
      t.string :image

      t.timestamps
    end
  end
end
