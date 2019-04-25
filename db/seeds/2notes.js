exports.seed = function(knex, Promise) {
    return knex('notes').del()
      .then(function () {
        return Promise.all([
          knex('notes').insert({id: 1, title: 'Cars', url: 'https://www.google.ca', 
          img_url: 'http://www.hgtv.com/content/dam/images/diy/video/0/01/016/0167/0167023.jpg',
          rating_counter: 4, user_id: 1, category_id: 1}),

          knex('notes').insert({id: 2, title: 'Basketball', url: 'https://www.nba.com', 
          img_url: 'https://images-na.ssl-images-amazon.com/images/I/91FOeSuXvIL._SX522_.jpg', 
          rating_counter: 3, user_id: 3, category_id: 3}),

          knex('notes').insert({id: 3, title: 'Cars', url: 'https://www.tesla.com',
          img_url: 'https://image.shutterstock.com/image-vector/car-cartoon-sticker-retro-style-260nw-566814880.jpg',
          rating_counter: 5, user_id: 2, category_id: 2})
        ]);
      });
  };
  
  
  
  