exports.seed = function(knex, Promise) {
    return knex('categories').del()
      .then(function () {
        return Promise.all([
          knex('categories').insert({ title: 'Cars', info: 'Cars are cool'}),
          knex('categories').insert({ title: 'Basketball', info: 'I love playing basketball'}),
          knex('categories').insert({ title: 'Coding', info: 'Here is a javascript code'})
        ]);
      });
  };
  
  
  