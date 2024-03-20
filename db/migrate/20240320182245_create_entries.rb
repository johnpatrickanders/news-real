class CreateEntries < ActiveRecord::Migration[7.1]
  def change
    create_table :entries do |t|
      t.references :user, null: false, foreign_key: true
      t.text :title
      t.references :source, null: false, foreign_key: true
      t.text :type
      t.text :summary
      t.text :take
      t.text :url
      t.text :status
      t.text :other
      t.boolean :verified

      t.timestamps
    end
  end
end
