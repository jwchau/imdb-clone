# == Schema Information
#
# Table name: details
#
#  id         :bigint           not null, primary key
#  movie_id   :integer          not null
#  runtime    :integer
#  summary    :string
#  storyline  :text
#  synopsis   :text
#  website    :string
#  box_office :bigint
#  company    :string
#  technical  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :detail do
    movie_id { 1 }
    runtime { 1 }
    summary { "MyString" }
    storyline { "MyText" }
    synopsis { "MyText" }
    website { "MyString" }
    box_office { "" }
    company { "MyString" }
    technical { "MyString" }
  end
end
