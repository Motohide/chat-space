class AddNameTogroups < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :group_id, :integer,null:false, unique: true
  end
end