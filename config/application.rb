require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

module TodoMvc
  class Application < Rails::Application
    config.browserify_rails.commandline_options = "-t reactify --extension=\".js.jsx\""
  end
end
