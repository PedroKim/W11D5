# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  lat         :float
#  lng         :float
#  description :string
#

require 'test_helper'

class BenchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
