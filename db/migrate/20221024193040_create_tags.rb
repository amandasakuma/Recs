class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.integer :post_id
      t.string :tag

      t.timestamps
    end
  end
end
