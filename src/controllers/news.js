exports.allSources = async (req,res) => {
    try {
        res.send("Controller is working fine!");
    } catch(err) {
        console.error(err);
    }
}