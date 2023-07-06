/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("watchLists", (table) => {
        table.increments("watchList_id").primary();
        table.string("watchList_name").notNullable();
        table.string("movie_ids");
        table.integer("user_id").references("user_id").inTable("users");
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("watchLists");
};
