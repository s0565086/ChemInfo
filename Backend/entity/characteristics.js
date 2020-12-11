module.exports = {
    name: "Characteristics",
    tableName: "characteristics",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        characteristic: {
            type: "string"
        }
    }
};