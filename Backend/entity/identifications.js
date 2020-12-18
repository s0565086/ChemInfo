module.exports = {
    name: "Identifications", // Will use table name `category` as default behaviour.
    tableName: "Identifications", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        gsbl_rn: {
            type: "int"
        },
        creation_time: {
            type: "date"
        }
    },
    relations:{
        denomination: {
            target: "names",
            type: "one-to-many",
            joinTable: true,
            cascade: true
        },
        characteristics: {
            target: "Characteristics",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        },
        dangers: {
            target: "Dangers",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        },
        security: {
            target: "Security",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        },
        uses: {
            target: "Uses",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        },
        regulations: {
            target: "Regulations",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        }
    }
};