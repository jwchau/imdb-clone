# == Schema Information
#
# Table name: movies
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  score      :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class MovieSerializer
  include FastJsonapi::ObjectSerializer
  set_type :movie #optional, explicit
  attributes :title, :year, :score
  has_many :people #through castcrew table

end
