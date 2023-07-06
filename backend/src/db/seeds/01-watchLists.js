const watchLists = require("./01-watchLists.json")

exports.seed = async function(knex) {
  return knex
  .raw(`TRUNCATE TABLE "watchLists" RESTART IDENTITY CASCADE`)
  .then(function () {
    return knex("watchLists").insert(watchLists)
  })
};
