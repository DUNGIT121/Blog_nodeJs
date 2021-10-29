const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const SiteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/courses', coursesRouter);

    app.use('/', SiteRouter);
}

module.exports = route;
