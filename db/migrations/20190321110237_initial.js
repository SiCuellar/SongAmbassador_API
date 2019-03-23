
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('favorites', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('artist');
      table.string('rating');

      table.timestamps(true. true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites')
  ])
};
