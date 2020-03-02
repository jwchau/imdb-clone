class TaggingSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :tag
  belongs_to :tagged #whatever got tagged, only `Movie` for now.
end
