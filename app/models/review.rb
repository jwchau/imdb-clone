# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  movie_id   :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
end
