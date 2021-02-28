const db = require('../config/database')
const Sequelize = require('sequelize')

module.exports = db.define('TrendingVideos', {
    videoId: {
        type: Sequelize.STRING,
        autoIncrement: true,
        primaryKey: true,
    },
    vidTitle: {
        type: Sequelize.STRING,
    },
    vidDescription: {
        type: Sequelize.STRING,
    },
    vidThumb:{
        type: Sequelize.JSON,
    },
    viewCount:{
        type: Sequelize.INTEGER,
    },
    chTitle: {
        type: Sequelize.STRING,
    }
})