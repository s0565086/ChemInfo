module.exports = {
    name: "Dangers",
    tableName: "dangers",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        danger: {
            type: "string"
        },
        image: {
            type: "blob"
        }
    }
};