$(() => {
  
  
  function createNotes (noteData){
    let title = noteData.title
    let url = noteData.url
    let img_url = noteData.img_url

    console.log(noteData)
  }

  $.ajax({
    method: "GET",
    url: "/",
  }).done((data) => {
    for(var user of data) {
      console.log(user)
      // $("<div>").text(user.name).appendTo($("container"));
      createNotes(user)
    }
  });;
});


