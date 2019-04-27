exports.seed = function(knex, Promise) {
    return knex('bookmarks').del()
      .then(function () {
        return Promise.all([
          knex('bookmarks').insert({ user_id: 1, note_id: 1}),
          knex('bookmarks').insert({ user_id: 2, note_id: 2}),
          knex('bookmarks').insert({ user_id: 3, note_id: 3}),
          knex('bookmarks').insert({ user_id: 1, note_id: 2}),
          knex('bookmarks').insert({ user_id: 1, note_id: 3})
          
        ]);
      });
  };
  
  
  