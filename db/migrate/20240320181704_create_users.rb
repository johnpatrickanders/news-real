class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :role
      t.text :status
      t.text :other
      t.boolean :verified

      t.timestamps
    end
  end
end
