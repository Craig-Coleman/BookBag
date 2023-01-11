class BooksController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        user = User.find(session[:user_id])
        books = user.books
        render json: books
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create 
        user = User.find(session[:user_id])
        book = user.books.create!(book_params)
        render json: book, status: :created
    end

    def update 
        book = Book.find(params[:id])
        book.update!(book_params)
        render json: book
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        render json: book
    end

    private

    def book_params
        params.require(:book).permit(:id, :title, :length, :year_published, :description, :cover, :user_id, :author_id, :publisher_id, 
            author_attributes: [
                :first_name, 
                :last_name, 
                :age, 
                :best_seller, 
                :books_published,
                :image
            ], 
            publisher_attributes: [
                :title, 
                :year_established, 
                :primary_genre,
                :image
            ])
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: 'Book not found' }, status: :not_found 
    end

end

