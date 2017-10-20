class AddNameTogroups < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :group_id, :integer,
    t.reference :user, foreign_key: true
  end
end
