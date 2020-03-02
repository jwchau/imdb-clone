class CreateMedia < ActiveRecord::Migration[5.2]
  def change
    create_table :media do |t|
      t.string :link
      t.references :mediable, polymorphic: true

      t.timestamps
    end

    # add_index :media, [:mediable_type, :mediable_id]
  end
end
