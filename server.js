const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const PORT = process.env.PORT || 3500;

// Custom middleware logger
app.use(logger);
// Handle options credentials check - before CORS
// and fetch cookies credentials requirement
app.use(credentials);
// Cors
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www/urlencoded
app.use(express.urlencoded({ extended: false }));

// built-in middleware for jso
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// serve static files (CSS, IMG, DATA)
// Only for webpages, API does not require that
app.use(express.static(path.join(__dirname, "/public")));

// Routes
// Root
app.use("/", require("./routes/root"));
// register
app.use("/register", require("./routes/register"));
// authentication
app.use("/auth", require("./routes/auth"));
// verify jwt
app.use("/refresh", require("./routes/refresh"));
// logout
app.use("/logout", require("./routes/logout"));
// check jwt
app.use(verifyJWT);
// employees
app.use("/employees", require("./routes/api/employees"));

// Custom 404 handling
app.all("*", (req, res) => {
  res.status(404); // 200 by default
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Custom Error handling
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
