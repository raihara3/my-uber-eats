# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

3.times do |n|
  restaurant = Restaurant.new(
    name: "restaurant_#{n}",
    fee: 100,
    time_required: 10,
  )

  12.times do |m|
    restaurant.foods.build(
      name: "food_#{m}",
      price: 500,
      description: "food_#{m} description"
    )
  end

  restaurant.save!
end
