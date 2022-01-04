class Order < ApplicationRecord
  has_many :line_foods

  validates :total_price, numericality: { greater_than: 0 }

  def save_with_update_line_foods!(line_foods)
    # transactionはLineFoodデータの更新と、Orderデータの保存処理、どちらかが失敗したら全ての処理を取り消せる
    ActiveRecord::Base.trannsaction do
      line_foods.each do |line_food|
        line_food.update_attributes!(active: true, order: self)
      end
      self.save!
    end
  end
end
