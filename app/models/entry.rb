class Entry < ApplicationRecord
  belongs_to :user
  belongs_to :source
end
