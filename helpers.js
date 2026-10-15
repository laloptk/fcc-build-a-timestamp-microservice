export const isValidParam = (req, res, next) => {
    const { date } = req.params;

    // Digits only -> unix timestamp in ms; anything else -> let Date parse it
    const parsed = /^\d+$/.test(date)
        ? new Date(parseInt(date, 10))
        : new Date(date);

    if (isNaN(parsed.getTime())) {
        return res.json({ error: "Invalid Date" });
    }

    req.parsedDate = parsed;
    next();
};