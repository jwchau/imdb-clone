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
require 'test_helper'

class DetailTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
