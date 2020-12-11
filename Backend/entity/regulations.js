module.exports = {
    name: "Regulations",
    tableName: "regulations",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        regulation: {
            type: "string"
        }
    }
};