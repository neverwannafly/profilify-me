class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.references :user
      t.string :target_type
      t.integer :target_id

      t.timestamps
    end
  end
end
