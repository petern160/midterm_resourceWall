$(function() {
  $('#demo').likeDislike({

    // update like / dislike counters
    click: function (btnType, likes, dislikes, event) {
        var likesElem = $(this).find('.likes');
        var dislikedsElem = $(this).find('.dislikes');
        likesElem.text(parseInt(likesElem.text()) + likes);
        dislikedsElem.text(parseInt(dislikedsElem.text()) + dislikes);
    }
    
  });
});