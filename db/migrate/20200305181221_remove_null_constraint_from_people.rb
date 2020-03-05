class RemoveNullConstraintFromPeople < ActiveRecord::Migration[5.2]
  def change
    remove_column :people, :birthdate, :datetime
    add_column :people, :birthdate, :datetime
  end
end
