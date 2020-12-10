module.exports = {
    name: "Identifications", // Will use table name `category` as default behaviour.
    tableName: "Identifications", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        denomination: {
            type: "string"
        },
        gsbl_rn: {
            type: "int"
        },
        creation_time: {
            type: "date"
        },
        characteristics: {
            type: "string"
        },
        danger: {
            type: "string"
        },
        security: {
            type: "string"
        },
        uses: {
            type: "string"
        },
        regulations: {
            type: "string"
        }
    }
};