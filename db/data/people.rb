people = [[1, 'Woody Allen']]

def load_array(arr, people)
  arr.each_with_index do |name, i|
    people.push([i + 2, name])
  end
end

names = [
  'Clint Eastwood', 'Robert De Niro',
  'Sean Connery', 'Sylvester Stallone',
  'Harrison Ford', 'Robin Williams',
  'Tom Hanks', 'Arnold Schwarzenegger',
  'Kevin Costner', 'Alfred Hitchcock',
  'Al Pacino', 'Bruce Willis',
  'Steve Martin', 'Dan Aykroyd',
  'Gene Hackman', 'Nicolas Cage',
  'Steven Spielberg', 'Tom Cruise',
  'Michael Douglas', 'Ron Howard',
  'Mel Gibson', 'John Carpenter',
  'Danny DeVito', 'Tim Robbins',
]

load_array(names, people)
Person.import([:id, :name], people)

#returns an array of all files in argument, as string
#Dir["/path/to/search/*"]