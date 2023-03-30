const { Pokemons, PokemonSchema } = require('./modelsConfig/pokemonsModel');

function setupModels(sequelize) {
  Pokemons.init(PokemonSchema, Pokemons.config(sequelize));
}

module.exports = setupModels;
