# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
List.destroy_all
User.destroy_all




# instances of User class

@user1 = User.create!(username: 'Mali', email: 'super.mali@email.com', password: 'M23456' )
@user2 = User.create!(username: 'Carri-anne', email:'super.cari@email.com', password: 'C23456')
@user3 = User.create!(username: 'Paul-Oh', email:'super.paul@email.com', password:'P23456')

puts "#{User.count} users created"

#  instances of List class 

@list1 = List.create!(input_1:'I am grateful for the love and support of those who matter in my life.', input_2:' I am grateful for the opportunity to start a new in career and dive into something that is both challenging and that I love.', input_3:'I am grateful for having the opportunity to move and start over in a brand new place.', user: @user1)
@list2 = List.create!(input_1:'A peaceful nights sleep.',input_2:'A wonderfully delicious large (free) soy dirty chai latte.', input_3:'Making a new connection during a networking event.', user: @user2)
@list3 = List.create!(input_1:'I am grateful for the cup of coffee I was able to enjoy outside on the patio while sitting in the sun.', input_2:'I am grateful for the opportunity to meet and network with differnet people from all walks of life.', input_3:'I am grateful for all of the support and encouragement form my peers and advisors during this tremulous time of change.', user: @user1)
@list4 = List.create!(input_1:'thankful that lasagna pans are cheap.', input_2:'thankful that schools teach stranger danger so effectively.', input_3:'alcohol', user: @user3)


puts "#{List.count} lists created"

# instances of Comment class

@comment1 = Comment.create!(content:'I love the morning coffee!! It sounds so peaceful.', user: @user2, list: @list3)
@comment2 = Comment.create!(content:'Your networking event sounds like it went really well, I am so happy for you!', user: @user1, list: @list2)
@comment3 = Comment.create!(content:'Because of reading this, I am dying less on the inside', user: @user3, list: @list1)

puts "#{Comment.count} comments created"