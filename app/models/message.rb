class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  mount_uploader :image, ImageUploader
  validates :text_or_image, presence: true
  validates :group_id,presence: true
  validates :user_id,presence: true
  private
    def text_or_image
      text.presence || image.presence
    end
end
