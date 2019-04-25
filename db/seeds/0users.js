exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, first_name: 'Alice', last_name: 'Red', email: 'ar@test.com', password: 'test'}),
        knex('users').insert({id: 2, first_name: 'Joe', last_name: 'Blue', email: 'jb@test.com', password: 'test2'}),
        knex('users').insert({id: 3, first_name: 'Dave', last_name: 'Green', email: 'dg@test.com', password: 'test3'})
      ]);
    });
};


