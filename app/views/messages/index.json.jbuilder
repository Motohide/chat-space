 json.array! @messages do |message|
    json.name  message.user.username
    json.text  message.text
    json.image  message.image
    json.created_at message.created_at
    json.id @message.id
  end
