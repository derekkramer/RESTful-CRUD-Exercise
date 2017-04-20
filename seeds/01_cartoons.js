
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cartoon').del()
    .then(function () {
      // Inserts seed entries
      return knex('cartoon').insert([
        {title: 'Bugs Bunny', year: 1969, network: 'Warner Brothers'},
        {title: 'Teenage Mutant Ninja Turtles', year: 1989, network: 'Fox'},
        {title: 'Samurai Jack', year: 2001, network: 'Cartoon Network'}
      ]);
    });
};
