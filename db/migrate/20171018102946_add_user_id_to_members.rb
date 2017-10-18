class AddUserIdToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members, :user_id, :integer
    add_column :members, :group_id, :integer
  end
end
