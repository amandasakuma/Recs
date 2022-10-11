class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.integer :author_id
      t.string :hed
      t.string :dek
      t.text :content
      t.boolean :draft
      t.timestamp :pub_date

      t.timestamps
    end
  end
end
