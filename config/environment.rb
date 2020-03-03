# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!


#camelize
Jbuilder.key_format camelize: :lower