module.exports = function (context) {
    context.log(context.req.query.name);

    context.res = { status: 202, body: 'hello' };
    
};