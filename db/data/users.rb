users = []

5.times do |i| 
  users.push([
    i + 1,
    "guestuser#{i + 1}",
    'password',
    "guestuser#{i + 1}@email.com"
  ])
end

User.import([:id, :username, :password, :email], users)