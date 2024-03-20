class Entry < ApplicationRecord
  belongs_to :user
  belongs_to :source

  validates :title, presence: true
  validates :source, presence: true
end
