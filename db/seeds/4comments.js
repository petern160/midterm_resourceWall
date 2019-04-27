const date = new Date().toISOString();
exports.seed = function(knex, Promise) {
    return knex('comments').del()
      .then(function () {
        return Promise.all([
          knex('comments').insert({ user_id: 1, note_id: 1, comments: 'this was great', create_date: date}),
          knex('comments').insert({ user_id: 2, note_id: 2, comments: 'never seen this before!', create_date: date}),
          knex('comments').insert({ user_id: 3, note_id: 3, comments: 'really inspiring', create_date: date}),
          knex('comments').insert({ user_id: 1, note_id: 3, comments: 'user1 Alice commented on note 3', create_date: date}),
          knex('comments').insert({ user_id: 2, note_id: 3, comments: 'user2 Joe commented on note 3', create_date: date}),
         
        ]);
      });
  };
  
  
  