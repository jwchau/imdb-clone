require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Person.destroy_all
Movie.destroy_all
Castcrew.destroy_all
User.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('person')
ApplicationRecord.connection.reset_pk_sequence!('movies')
ApplicationRecord.connection.reset_pk_sequence!('castcrew')
ApplicationRecord.connection.reset_pk_sequence!('user')

ApplicationRecord.transaction do
	puts 'Loading people...'
	require_relative 'data/people.rb'
	puts 'Loading movies...'
	require_relative 'data/movies.rb'
	puts 'Loading castcrew...'
	require_relative 'data/castcrew.rb'
	puts 'Done!'
end

5.times do |i|
  User.create(
    id: i + 1,
    username: "guestuser#{i + 1}",
    password: 'password',
    email: "guestuser#{i + 1}@email.com"
	)
end

#attach aws
Movie.all.each do |movie|
	fname = movie.title.gsub(/[^a-zA-Z]/,'').downcase

	poster = open("https://imdb-clone-dev.s3-us-west-1.amazonaws.com/posters/#{movie.id}.jpeg")
	movie.poster.attach(io: poster, filename: "#{fname}_poster.jpeg")

	# debugger
	trailer = open("https://imdb-clone-dev.s3-us-west-1.amazonaws.com/trailers/#{movie.id}.mp4")
	movie.trailer.attach(io: trailer, filename: "#{fname}_trailer.jpeg")
end