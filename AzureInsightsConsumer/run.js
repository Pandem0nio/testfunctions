module.exports = function (context) {
    context.log(context.req.query.name);
    var newstr = reverse(context.req.query.name);
    context.res = { status: 200, body: 'reverse string = ' + newstr };

    context.done();

    function reverse(s) {
        return s.split("").reverse().join("");
    }
};