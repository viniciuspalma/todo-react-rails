# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

# Create items
25.times do
  Todo.create!(
    title: Faker::Lorem.words(3).join(' '),
    completed: [true, false].sample
  )
end
puts "25 items created"

puts "Seed finished"
