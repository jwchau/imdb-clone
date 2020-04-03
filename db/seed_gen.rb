require 'csv'
# table = CSV.parse(File.read('imdb.csv'), headers: true)
table = CSV.parse(File.read('./the-movies-dataset/movies_metadata.csv'), headers: true)

# File.open("p_data/movies.rb", "w") do |f|
#   f.write("Movie.import(\n[:id, :title, :year, :score],\n[")
#   for i in 0..5000 do
#     id = table[i][1].gsub(/[^0-9]/,'')
#     name = table[i][2].gsub(/[^a-z ]/i,'').strip
#     year = table[i][8].to_i
#     score = table[i][5].to_f
#     f.write("[")

#     f.write("#{id}, ")
#     f.write("\"#{name}\", ")
#     f.write("#{year}, ")
#     f.write("#{score}")

#     f.write("],\n")
#   end
#   f.write("])");
# end

# File.open("test.rb", "w") do |f|
#   f.write("Movie.import(\n[:id, :title, :year, :score],\n[")
#   for i in 0..5000 do
#     id = table[i][1].gsub(/[^0-9]/,'')
#     name = table[i][2].gsub(/[^a-z ]/i,'').strip
#     year = table[i][8].to_i
#     score = table[i][5].to_f
#     f.write("[")

#     f.write("#{id}, ")
#     f.write("\"#{name}\", ")
#     f.write("#{year}, ")
#     f.write("#{score}")

#     f.write("],\n")
#   end
#   f.write("])");
# end

# load 'seed_gen.rb'