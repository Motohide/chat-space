$(document).on('turbolinks:load', function(){

  var message_text = $(".right-contents-middle");

  function appendProduct(message) {
    var image = (message.image.url) ? `<img src = ${ message.image.url }>` : "";
    var html = `<div class="message">
                  <div class="message-top">
                    <div class="message-name">
                      ${ message.name }
                    </div>
                    <div class="message-time">
                      ${ message.created_at }
                    </div>
                  </div>
                  <div class="message-text">
                    ${ message.text }
                    ${ image }
                  </div>
                </div>`
    return html
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      type: 'POST',
      url: location.href,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      var html = appendProduct(data);
      $('.right-contents-middle').append(html)
      $('.send').removeAttr('disabled');
      $('.right-contents-middle').animate({scrollTop: $('.right-contents-middle')[0].scrollHeight}, 'fast');
      $('.text').val('');
    })
    .fail(function() {
      alert('送信に失敗しました');
    });
  });
});
