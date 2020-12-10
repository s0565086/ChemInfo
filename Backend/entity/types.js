module.exports = {
    name: "Types", // Will use table name `category` as default behaviour.
    tableName: "Type", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        type_name: {
            type: "string"
        },
        type: {
            type: "string"
        }
    }
};