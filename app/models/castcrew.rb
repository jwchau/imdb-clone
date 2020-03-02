# == Schema Information
#
# Table name: castcrews
#
#  id         :bigint           not null, primary key
#  movie_id   :integer          not null
#  person_id  :integer          not null
#  role       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Castcrew < ApplicationRecord
end
