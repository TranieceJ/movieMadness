const knex = require("../db/connection");

function listAll() {
    return knex("watchLists").select("*");
}

function list(user_id) {
    return knex("watchLists")
    .select("*")
    .where({user_id});
}

function create(newWatchList) {
    return knex("watchLists").insert(newWatchList, "*");
}

function read(watchList_id) {
    return knex("watchLists")
    .select("*")
    .where({watchList_id})
    .first()
}

module.exports = {
    listAll,
    create,
    read,
    list, 
}