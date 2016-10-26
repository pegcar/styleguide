require 'sass/plugin/rack'
require_relative 'web'

Sass::Plugin.options[:style] = :compressed
Sass::Plugin.options[:template_location] = 'assets/css'

use Sass::Plugin::Rack
run Sinatra::Application
