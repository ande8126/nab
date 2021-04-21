const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET ROUTER TO BRING IN ALL EXISTING RECORDS REQUESTS
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "requests"`;
  pool.query( queryText ).then( ( results )=>{
    res.send( results.rows );
  }).catch( ( error )=>{
    console.log( 'error in requests GET', error);
    res.sendStatus( 500 );
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
