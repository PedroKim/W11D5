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

class Bench < ApplicationRecord

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    Bench
      .where(lat: bounds["southWest"]["lat"]..bounds["northEast"]["lat"])
      .where(lng: bounds["southWest"]["lng"]..bounds["northEast"]["lng"])

  end
end
