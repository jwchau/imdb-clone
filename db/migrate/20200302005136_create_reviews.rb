class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :movie_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.text :body, null: false

      t.timestamps
    end
    
    add_index :reviews, [:movie_id, :user_id], unique: true
  end
end
