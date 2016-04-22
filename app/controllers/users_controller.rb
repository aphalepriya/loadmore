class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  def index
    if params[:id]
      @users = User.where('id >?', params[:id]).limit(1)
    else
      @users = User.limit(1)
    end
    respond_to do |format|
      format.html
      format.js
    end
  end
end