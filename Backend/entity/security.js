module.exports = {
    name: "Securities",
    tableName: "securities",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        security: {
            type: "string"
        }
    }
};