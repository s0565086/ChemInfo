module.exports = {
    name: "Uses",
    tableName: "uses",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        use: {
            type: "string"
        }
    }
};