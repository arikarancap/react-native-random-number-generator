const randomNumber = (Min = 0, Max = 100) => {
    return Math.round(Math.random() * (Max - Min) + Min)
};
module.exports = randomNumber;