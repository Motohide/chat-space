class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  #mount_uploader :image, ImageUploader
  validates :text_or_image, presence: true
  private
    def text_or_image
      text.presence or image.presence
    end
end
