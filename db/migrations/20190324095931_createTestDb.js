
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('favorites_test', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('artist');
      table.string('rating');
      table.string('genre')
      table.integer("fav_id")

      table.timestamps(true, true);
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites_test')
  ])
};
