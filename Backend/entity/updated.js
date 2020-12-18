module.exports = {
    name: "Updated", // Will use table name `category` as default behaviour.
    tableName: "updated", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        update_time: {
            type: "date"
        },
        update_user: {
            type: "string"
        },
        checked_time: {
            type: "date"
        },
        checked_user: {
            type: "string"
        }
    }
};