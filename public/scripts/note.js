$(() => {
    console.warn('inside note.js document ready');
  
    function createNotes (noteData){
      let title = noteData.title
      let url = noteData.url
      let img_url = noteData.img_url
      console.log(noteData)
    }
    //sample code for create note page
    // $.ajax({
    //   method: "GET",
    //   url: "/",
    // }).done((data) => {
    //   for(var user of data) {
    //     console.log(user)
    //     // $("<div>").text(user.name).appendTo($("container"));
    //     createNotes(user)
    //   }
    // });;

    function createNote (noteData){
        
    }

  
//end of document.ready()
});
  
  
  