require 'csv'
table = CSV.parse(File.read('imdb.csv'), headers: true)


File.open("test.rb", "w") do |f|
  f.write("Movie.import(\n[:id, :title, :year, :score],\n[")
  for i in 999..1010 do
    name = table[i][2].gsub(/[^a-z ]/i,'').strip
    f.write("[")

    f.write("#{name}")


    f.write("],\n")
  end
  f.write("])");
end
