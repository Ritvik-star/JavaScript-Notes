const express = require('express');

const {handleShortenUrl} = require('../controller/url');

const router = express.Router();

router.post("/", handleShortenUrl);

module.exports = router;