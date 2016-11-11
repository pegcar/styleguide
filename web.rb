require 'sinatra'
require 'sinatra/bootstrap'
require 'slim'
require 'pry'

register Sinatra::Bootstrap::Assets

get '/' do
  slim :index
end

get '/colors' do
  slim :colors
end

get '/typography' do
  slim :typography
end

get '/elements' do
  slim :elements
end
