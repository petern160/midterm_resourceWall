
exports.up = function(knex, Promise) {

     knex.schema.table('notes', function(table){
        
        table.foreign('category_id').references('categories.id')
        table.foreign('user_id').references('users.id')
        
      })

      knex.schema.table('bookmarks', function(table){
        
        table.foreign('note_id').references('notes.id')
        table.foreign('user_id').references('users.id')
        
      })
      knex.schema.table('comments', function(table){
        
        table.foreign('note_id').references('notes.id')
        table.foreign('user_id').references('users.id')
        
      })

      return;
};

exports.down = function(knex, Promise) {
            knex.schema.dropColumn('user_id')
            knex.schema.dropColumn('note_id')
            knex.schema.dropColumn('category_id')
            return;
};
