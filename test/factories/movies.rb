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
FactoryBot.define do
  factory :movie do
    
  end
end
