module.exports = {
    name: "Names", // Will use table name `category` as default behaviour.
    tableName: "Names", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        language: {
            type: "string"
        }
    }
};