module.exports = {
    name: "Names", // Will use table name `category` as default behaviour.
    tableName: "Names", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        language: {
            type: "string"
        },
        type: {
            type: "string"
        },
        supplement: {
            type: "string"
        },
        creation_time: {
            type: "date"
        },
        update_time: {
            type: "date"
        }
    }
};