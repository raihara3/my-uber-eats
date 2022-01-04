class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.references :restaurant, null: false, foreign_key: { to_table: :restaurants }
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
