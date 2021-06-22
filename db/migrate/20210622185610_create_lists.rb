class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.string :input_1
      t.string :input_2
      t.string :input_3
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
