class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :linkedin
      t.string :github
      t.string :facebook
      t.string :twitter
      t.string :bio
      t.string :university
      t.string :mottoa
      t.string :picture

      t.timestamps
    end
  end
end
