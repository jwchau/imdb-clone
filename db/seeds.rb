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

ApplicationRecord.connection.reset_pk_sequence!('person')
ApplicationRecord.connection.reset_pk_sequence!('movies')
ApplicationRecord.connection.reset_pk_sequence!('castcrew')

ApplicationRecord.transaction do
	puts 'Loading people...'
	require_relative 'data/people.rb'
	puts 'Loading movies...'
	require_relative 'data/movies.rb'
	puts 'Loading castcrew...'
	require_relative 'data/castcrew.rb'
	puts 'Done!'
end
