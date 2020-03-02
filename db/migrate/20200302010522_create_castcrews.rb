class CreateCastcrews < ActiveRecord::Migration[5.2]
  def change
    create_table :castcrews do |t|
      t.integer :movie_id, null: false, index: true
      t.integer :person_id, null: false, index: true
      t.string :role, null: false, index: true

      t.timestamps
    end
  end
end
