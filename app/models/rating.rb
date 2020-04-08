# == Schema Information
#
# Table name: ratings
#
#  id         :bigint           not null, primary key
#  movie_id   :integer          not null
#  user_id    :integer          not null
#  score      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Rating < ApplicationRecord
  validates :score, presence: true

  # belongs_to :movie
  belongs_to :user
end
