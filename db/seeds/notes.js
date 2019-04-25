exports.seed = function(knex, Promise) {
    return knex('notes').del()
      .then(function () {
        return Promise.all([
          knex('notes').insert({id: 1, title: 'Cars', url: 'www.google.ca', img_url: 'http://www.hgtv.com/content/dam/images/diy/video/0/01/016/0167/0167023.jpg', rating_counter: 4}),
          knex('notes').insert({id: 2, title: 'Basketball', url: 'www.nba.com', img_url: 'https://images-na.ssl-images-amazon.com/images/I/91FOeSuXvIL._SX522_.jpg', rating_counter: 3}),
          knex('notes').insert({id: 3, title: 'Cars', url: 'www.tesla.com', img_url: 'http://www.hgtv.com/content/dam/images/diy/video/0/01/016/0167/0167023.jpg', rating_counter: 5})
        ]);
      });
  };
  
  
  
  