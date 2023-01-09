class PublishersController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        user = User.find(session[:user_id]) 
        publishers = user.publishers.uniq 
        render json: publishers
    end

    private

    def publisher_params
        params.permit(:id, :title, :year_establisher, :primary_genre, :image)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: 'Publisher not found' }, status: :not_found 
    end

end
