module.exports = function (context) {
    context.log(context.req.query.name);

    context.res = { status: 200, body: 'hello ' + context.req.query.name };

    context.done();
    
};