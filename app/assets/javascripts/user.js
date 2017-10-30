$(document).on('turbolinks:load', function(){
  $(function() {
      $("#chat-input").on("keyup", function(){
        var input = $("#chat-input").val();

      function appendProduct(user) {

        var html = `<div class="chat-group-user group-id-${user.id} user-search-result clearfix">
                       <p class="chat-group-user__name">${ user.name }</p>
                       <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                      </div>`
        return html;
      }

        $.ajax({
          type: 'GET',
          url: '/users',
          data: { keyword: input},
          dataType: 'json'
        })
        .done(function(users) {
          var html = "";
          $(".user-search-result").remove();
          if (users.length !== 0) {
            $.each(users,function(index,val){
              html = appendProduct(val)
            $('.chat_group-form__search').append(html);
            });
          }
        })
        .fail(function(user) {
          console.table(user)
          alert('ユーザー検索に失敗しました');
        });
      });
    });
    function appendRemove(id, name){
      var html = `<div class='chat-group-user clearfix js-chat-member' user-search-result-add id='chat-group-user-8'>
                    <input name='group[user_ids][]' type='hidden' value='${ id }'>
                    <p class='chat-group-user__name'>${ name }</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                    </div>`
        $('.user-search-result-add').append(html);
    }
    $(".chat-group-form").on("click", '.user-search-add', function(){
      $(this).parent().remove();
      var id = $(this).data('user-id');
      var name = $(this).data('user-name');
      appendRemove(id, name);
    });
    $(".chat-group-form").on("click", '.user-search-remove ', function(){
      $(this).parent().remove();
  });
});
