$(document).ready(function(){
  var bios = ["reed", "narayan", "david", "lawrie"];

  $(".show-bio").click(function() {
    var id = $(this).data('id');
    $("#" + id).addClass("is-active");
  })

  $(".close-modal").click(function() {
    var id = $(this).data('id');
    $("#" + id).removeClass("is-active");
  })

  $(".previous-bio").click(function() {
    $(".previous-bio").prop('disabled', true);
    setTimeout(function(){
      $(".previous-bio").prop('disabled', false);
    }, 200);
    var currentId = $(this).data('id');
    $("#" + currentId).removeClass("is-active");
    var index = bios.indexOf(currentId)
    var newIndex = index - 1
    if (newIndex < 0) {
      newIndex = bios.length - 1;
    }
    var newId = bios[newIndex]
    $("#" + newId).addClass("is-active");
  })

  $(".next-bio").click(function() {
    $(".next-bio").prop('disabled', true);
    setTimeout(function(){
      $(".next-bio").prop('disabled', false);
    }, 200);
    var currentId = $(this).data('id');
    $("#" + currentId).removeClass("is-active");
    var index = bios.indexOf(currentId)
    var newIndex = index + 1
    if (newIndex >= bios.length) {
      newIndex = 0;
    }
    var newId = bios[newIndex]
    $("#" + newId).addClass("is-active");
  })
})
