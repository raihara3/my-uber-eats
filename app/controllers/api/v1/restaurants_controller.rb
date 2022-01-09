module Api
  module V1
    class RestaurantsController < ApplicationController
      def index
        restaurants = Restaurant.all

        sleep(1)

        render json: {
          restaurants: restaurants
        }, status: :ok
      end
    end
  end
end
