const service = require("./users.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// VALIDATIONS

async function watchListIdExists(req, res, next) {
    const data = await service.read(req.params.watchList_id);
    if (data) {
        res.locals.watchList = data;
        return next();
    }
    next({status: 404, message: `Watch list ID: ${req.params.watchList_id} does not exist.`})
}

function watchListIdIsMadeByCorrectUser(req, res, next) {
    const user_id = req.params.user_id;
    const watchList = res.locals.watchList;
    if (watchList.user_id === Number(user_id)) {
        return next();
    }
    next({status: 404, message: `Watch list ID: ${req.params.watchList_id} is not made by user ${user_id}.`})
}

function hasName(req, res, next) {
    const watchList_name = req.body.data.watchList_name;
    if (watchList_name) {
        return next();
    }
    next({status: 400, message: "Watch list must include a name."})
}

function hasUser_id(req, res, next) {
    const user_id = req.body.data.user_id;
    if (user_id) {
        return next();
    }
    next({status: 400, message: "Watch list must include a user ID."})
}

// CRUD 

async function listAll(req, res) {
    const data = await service.listAll();
    res.json({data});
}

async function list(req, res) {
    const user_id = req.params.user_id;
    const data = await service.list(user_id);
    res.json({
        data,
    });
}

async function create(req, res) {
    const dataArray = await service.create(req.body.data);
    const data = dataArray[0];
    res.status(201).json({
        data
    });
}

function read(req, res) {
    const data = res.locals.watchList;
    res.json({data});
}

// async function updateWatchListMovies(req, res) {
    
// }

// async function updateWatchListName(req, res) {

// }

// async function updateUserName(req, res) {

// }

module.exports = {
    listAll: asyncErrorBoundary(listAll),
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(watchListIdExists), watchListIdIsMadeByCorrectUser, read],
    create: [hasName, hasUser_id, asyncErrorBoundary(create)]
}