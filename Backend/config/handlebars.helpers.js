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