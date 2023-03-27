// Cors -> Cross Origin Resource Sharing
// Allow domains that access the  backend
const allowedList = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedList.indexOf(origin) !== -1 || !origin) {
      // Parameters
      // 1st: parameter means the error
      // 2nd: is saying that origin will sent back
      callback(null, true);
    } else {
      callback(new Error("Not allowed byCORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
