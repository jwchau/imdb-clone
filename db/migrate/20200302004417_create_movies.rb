class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false, indexed: true
      t.integer :year, null: false, indexed: true
      t.float :score, null: false

      t.timestamps
    end
  end
end
