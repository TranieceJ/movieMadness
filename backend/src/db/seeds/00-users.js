const users = require("./00-users.json");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex
  .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
  .then(function () {
    return knex("users").insert(users)
  })
};
