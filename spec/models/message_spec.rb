require 'rails_helper'

describe Message do
    it "is valid with a text, image" do
      expect(build(:message)).to be_valid
    end

    it "is invalid without a text" do
      message = build(:message, text: nil)
      expect(message).to be_valid
    end

    it "is invalid without a image" do
      message = build(:message, image: nil)
      expect(message).to be_valid
    end

    it "is invalid without a group_id" do
      message = build(:message, group_id: nil)
      message.valid?
      expect(message.errors[:group_id]).to include("を入力してください")
    end

    it "is invalid without a user_id" do
      message = build(:message, user_id: nil)
      message.valid?
      expect(message.errors[:user_id]).to include("を入力してください")
    end
end
