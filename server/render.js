var path = require('path');
var bundleName = 'index';
var pathToBundle = path.resolve('desktop.bundles', bundleName);
var BEMTREE = require(path.join(pathToBundle, bundleName + '.bemtree.js')).BEMTREE;
var BEMHTML = require(path.join(pathToBundle, bundleName + '.bemhtml.js')).BEMHTML;
var isDev = process.env.NODE_ENV === 'development';

function render(req, res, data, context) {
    var query = req.query;

    if (isDev && query.json) return res.send('<pre>' + JSON.stringify(data, null, 4) + '</pre>');

    var bemtreeCtx = {
        block: 'root',
        context: context,
        // extend with data needed for all routes
        data: Object.assign({}, {
            url: req._parsedUrl
        }, data)
    };

    try {
        var bemjson = BEMTREE.apply(bemtreeCtx);
    } catch (err) {
        console.error('BEMTREE error', err.stack);
        console.trace('server stack');
        return res.sendStatus(500);
    }

    if (isDev && query.bemjson) return res.send('<pre>' + JSON.stringify(bemjson, null, 4) + '</pre>');

    try {
        var html = BEMHTML.apply(bemjson);
    } catch (err) {
        console.error('BEMHTML error', err.stack);
        return res.sendStatus(500);
    }

    res.send(html);
}

module.exports = {
    render: render
};
