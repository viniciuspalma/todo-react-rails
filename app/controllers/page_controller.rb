class PageController < ApplicationController
  def index
    @todos = Todo.all
  end
end
