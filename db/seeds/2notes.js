exports.seed = function(knex, Promise) {
    return knex('notes').del()
      .then(function () {
        return Promise.all([

          knex('notes').insert({ title: 'Kanye in the Wild', url: 'https://cheezburger.com/407301/here-are-those-kanyelink-gifs-you-were-trying-to-find', 
          img_url: 'https://i.chzbgr.com/full/8461320704/h7A7BD4C9/', 
          rating_counter: 3, user_id: 2, category_id: 2, note_info:'The power of the Tri force is strong'}),

          knex('notes').insert({ title: 'Kanye and Lil Pump', url: 'https://giphy.com/explore/lil-pump-kanye-west',
          img_url: 'https://media1.giphy.com/media/fVbgexEL8sxRsOQRdI/giphy.gif',
          rating_counter: 5, user_id: 3, category_id: 3, note_info: 'I hear you like memes, you should click on the image :)'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://media1.giphy.com/media/9Xh1CGm4Hzo4g/giphy.gif', 
          rating_counter: 10, user_id: 1, category_id: 3, note_info:'the GOAT'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://cdn3-www.mandatory.com/assets/uploads/2017/04/1.gif', 
          rating_counter: 7, user_id: 2, category_id: 3, note_info:'When you get assigned work on the weekends'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://media2.giphy.com/media/xTcnSNxfOFmfCCUTPG/giphy.gif', 
          rating_counter: 13, user_id: 1, category_id: 3, note_info:'no errors here just hardcoded everything'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://images.rapgenius.com/f425d036639e74d3996b47ad121bdc7c.398x223x20.gif', 
          rating_counter: 56, user_id: 3, category_id: 3, note_info:'easiest query of my life'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://i.gifer.com/1YXi.gif', 
          rating_counter: 12, user_id: 3, category_id: 3, note_info:'lighthouse lab graduate here'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://static1.squarespace.com/static/582b7f6c1b631b90f500ee56/t/58d8fa04579fb308147954e0/1490614823202/', 
          rating_counter: 10, user_id: 2, category_id: 3, note_info:'Aint Happening'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://static.hiphopdx.com/2014/07/KANYEWEST_JULY11.jpg', 
          rating_counter: 90, user_id: 1, category_id: 3, note_info:'NIMA LOVES KANYEEEEE'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://media.giphy.com/media/xEeFolsy4wg9i/giphy.gif', 
          rating_counter: 64, user_id: 3, category_id: 3, note_info:'mY hOmiE kAnyeeee'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'http://i.imgur.com/cvnAtZJ.jpg?1', 
          rating_counter: 24, user_id: 1, category_id: 3, note_info:'Check it out baby kanye'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://i.imgflip.com/1f4ivt.jpg', 
          rating_counter: 19, user_id: 2, category_id: 3, note_info:'ITS YA BOIII KANYE'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://i.chzbgr.com/full/7946832640/hA1819610/', 
          rating_counter: 37, user_id: 2, category_id: 3, note_info:'RoFLMAO'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'http://atlantadailyworld.com/wp-content/uploads/sites/5/2015/08/funny-kanye-west-pic.jpg?w=300', 
          rating_counter: 3, user_id: 1, category_id: 3, note_info:'When you wake up to early'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://s-media-cache-ak0.pinimg.com/736x/9a/84/2e/9a842eaf9f61be2f7b0edcce3f17212c.jpg', 
          rating_counter: 3, user_id: 3, category_id: 3, note_info:'I feel ya bro'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://i.imgflip.com/2925r9.jpg', 
          rating_counter: 3, user_id: 2, category_id: 3, note_info:'vote for kanye'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://media2.giphy.com/media/u7hjTwuewz3Gw/giphy.gif', 
          rating_counter: 3, user_id: 1, category_id: 3, note_info:'clap clap clap'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://img.memecdn.com/Kanye-West-Kanye-East_o_146683.jpg', 
          rating_counter: 3, user_id: 1, category_id: 3, note_info:'East and West'}),

          knex('notes').insert({ title: 'kanye', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'http://www.z90.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-08-at-10.12.12-AM.png', 
          rating_counter: 3, user_id: 2, category_id: 3, note_info:'HAHAHAHAHAHHAHAAH'}),

          knex('notes').insert({ title: "Drake's dancing moves", url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://i.makeagif.com/media/11-03-2015/_NFXlu.gif', 
          rating_counter: 100, user_id: 3, category_id: 3, note_info:'Tennis = Dancing'}),

          knex('notes').insert({ title: 'kanye and fish buddy', url: 'https://www.youtube.com/watch?v=SXmuU9KESpo', 
          img_url: 'https://media0.giphy.com/media/8wfeGJVRwFaTrP9VOL/source.gif', 
          rating_counter: 69, user_id: 2, category_id: 3, note_info:'Fishes out of water'})

          
        ]);
      });
  };
  
  
  
  