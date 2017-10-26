class Group < ApplicationRecord
  has_many :users, through: :members
  has_many :messages
  has_many :members

  validates :name, presence: true

  def last_message
    if self.messages.present?
      return self.messages.last.text if self.messages.last.text.present?
       '画像が投稿されました' if self.messages.last.image.present?
    else
      return 'メッセージを入力してください'
   end
  end
end
