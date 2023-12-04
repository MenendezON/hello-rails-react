class MessagesController < ApplicationController
  def random
    @message = Message.all.sample
    render json: @message
  end
end
