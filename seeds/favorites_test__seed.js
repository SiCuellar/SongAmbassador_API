
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites_test').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites_test').insert([
        { id: 4, title: 'things1', artist: 'things1', rating: 5, fav_id: 1 },
        { id: 5, title: 'things2', artist: 'things2', rating: 5, fav_id: 1 },
        { id: 6, title: 'things3', artist: 'things3', rating: 5 }
      ]);
    });
};
