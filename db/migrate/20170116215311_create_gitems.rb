class CreateGitems < ActiveRecord::Migration[5.0]
  def change
    create_table :gitems do |t|
      t.integer :title, null: false
      t.integer :column_id, null: false
      t.date :expire_date
      t.boolean :expired, null:false, default: false
      t.timestamps
    end
  end
end
