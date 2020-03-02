class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name, null: false, index: true
      t.datetime :birthdate, null: false

      t.timestamps
    end
  end
end
