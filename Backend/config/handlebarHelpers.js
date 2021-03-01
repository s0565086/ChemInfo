// const moment = require('moment')
//
// module.exports = {
//     formatDateTime: (dateTime) => {
//         return moment(dateTime).format("D.M.YYYY")
//     },
//     selected: (arg1, arg2) => {
//         if (arg1 === arg2) {
//             return " selected";
//         }
//         return "";
//     }
// }
const handlebars = require('handlebars');
handlebars.registerHelper("ifCond", function(cond1, cond2, cond3, options) {
    if(cond1 === cond2 || cond1 === cond3) {
        return options.fn(this);
    }else {
        return options.inverse(this);
    }
})
handlebars.registerHelper("ifCond2", function(cond1, cond2, cond3, cond4, options) {
    if(cond1 === cond2 || cond1 === cond3 || cond1 === cond4) {
        return options.fn(this);
    }else {
        return options.inverse(this);
    }
})
handlebars.registerHelper("selected", function(cond1, cond2) {
    if(cond1 === cond2) {
        return "selected";
    }else {
        return "";
    }
})