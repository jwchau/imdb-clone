class CreateDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :details do |t|
      t.integer :movie_id, null: false, index: true
      t.integer :runtime
      t.string :summary
      t.text :storyline
      t.text :synopsis
      t.string :website
      t.bigint :box_office
      t.string :company
      t.string :technical

      t.timestamps
    end
  end
end
