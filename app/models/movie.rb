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
class Movie < ApplicationRecord
  Gutentag::ActiveRecord.call self

  validates :title, :year, :score, presence: true

  has_one_attached :poster
  has_one_attached :trailer

  has_many :reviews
  has_many :ratings

  has_many :reviewers,
    through: :reviews,
    source: :user

  has_many :raters,
    through: :ratings,
    source: :user
end
