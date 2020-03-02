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
require 'test_helper'

class MovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
