const { default: mongoose } = require("mongoose");
const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb://localhost:27017/technologyStore"
        );
        if (conn.connection.readyState === 1)
            console.log("db connected successfully");
        else console.log("db connected failed");
    } catch (error: any) {
        console.log(error);
        throw new Error(error);
    }
};

module.exports = dbConnect;
