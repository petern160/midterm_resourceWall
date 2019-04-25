exports.seed = function(knex, Promise) {
    return knex('categories').del()
      .then(function () {
        return Promise.all([
          knex('categories').insert({id: 1, title: 'Cars', info: 'Cars are cool'}),
          knex('categories').insert({id: 2, title: 'Basketball', info: 'I love playing basketball'}),
          knex('categories').insert({id: 3, title: 'Coding', info: 'Here is a javascript code'})
        ]);
      });
  };
  
  
  