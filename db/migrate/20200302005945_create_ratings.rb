class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :movie_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.integer :score, null: false

      t.timestamps
    end

    add_index :ratings, [:movie_id, :user_id], unique: true
  end
end
