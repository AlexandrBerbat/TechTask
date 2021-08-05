module.exports = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 5
        },
        type: {
            type: "string",
            minLength: 5
        },
        color: {
            type: "string",
            minLength: 5  //? "red" ?
        },
        wheelSize: {
            type: "number",
        },
        price: {
            type: "number",
        },
        description: {
            type: "string",
            minLength: 5
        }
    }
}