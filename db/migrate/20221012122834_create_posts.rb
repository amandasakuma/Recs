class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.string :hed 
      t.string :dek 
      t.text :content 
      t.boolean :draft
      t.timestamp :pub_date
      
      t.timestamps
    end
    # add_index :posts, :user_id 
    add_index :posts, :created_at
  end
end
