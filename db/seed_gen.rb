require 'csv'
table = CSV.parse(File.read('imdb.csv'), headers: true)


