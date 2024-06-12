const express = require('express');
const { createPorfolio, getPortfolios, getOnePortfolio, getOtherPortfolios } = require('../controllers/porfolioRoutes');
const router = express.Router();

router.post('/create-portfolio',createPorfolio);
router.get('/get-portfolios',getPortfolios);
router.get('/get-portfolio/:id',getOnePortfolio);
router.get('/get-other-portfolios/:id',getOtherPortfolios);

module.exports = router;