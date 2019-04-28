$(() => {
  //  console.log('clicked rating up')
  //  console.log( $('#rating-counter').html() )
  //  let currentCount = $('#rating-counter').html()
  
  
  var pathname = window.location.pathname;
  var UPpathname = pathname + '/up'
  var DOWNpathname = pathname + '/down'
  var COMMENTpathname = pathname + "/comment"
  
   $("#rating-up").click(function(){
    $.post(UPpathname, function(data, status){
      console.log('UP counter sent to DB')
      $('#rating-counter').html(function(i, val) { return val*1+1 })

    });
  })
  
  
  $("#rating-down").click(function(){
    $.post(DOWNpathname, function(data, status){
      console.log('DOWN counter sent to DB')
      $('#rating-counter').html(function(i, val) { return val*1-1 })

    });
  })

  // $('#new-comment-form').on('submit', function(){
  //   let formData = $(this).serialize()
    
  //   $.ajax({
  //     url: 'huhy',
  //     method: 'POST',
  //     data: formData,
  //     success: function (data){
  //       console.warn(formData)
  //       console.log(data)
  //     } 
  //   })
  // })
  
  
})
