class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :code
      t.string :name
      t.string :location
    end
  end
end
