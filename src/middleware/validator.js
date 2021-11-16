const main = async (req, res, next) => {
    const { source } = req.query;
    const sources = ["manilabulletin", "businessmirror"];
    for (const index in sources) {
        const element = sources[index];
        if (source !== element) {
            return res.status(400).json({
                success: false,
                message: "Source specified in the query doesn't exist.",
                data: {},
            });
        }
    }
};

module.exports = main;
