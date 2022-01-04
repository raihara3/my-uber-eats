class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foreign_key: { to_table: :foods }
      t.references :restaurant, null: false, foreign_key: { to_table: :restaurants }
      t.references :order, null: false, foreign_key: { to_table: :orders }
      t.integer :count, null: false, default: 0
      t.boolean :active, null: false, default: false

      t.timestamps null: false
    end
  end
end
