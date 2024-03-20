class CreateSources < ActiveRecord::Migration[7.1]
  def change
    create_table :sources do |t|
      t.text :name
      t.text :url
      t.boolean :verified
      t.text :type
      t.text :status

      t.timestamps
    end
  end
end
