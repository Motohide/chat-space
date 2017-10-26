FactoryGirl.define do
  factory :message do
    association :group
    association :user
    text { Faker::Lorem.word }
    image Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/test.jpg'))
    created_at { Faker::Time.between(2.days.ago, Time.now, :all) }
  end
end
