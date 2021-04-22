const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log( 'in letter.router GET', req.query.state );
  state = req.query.state;
  queryText = `SELECT * FROM "letters" WHERE "state"=$1;`;
  pool.query( queryText, [ state ] ).then( ( results )=>{
    res.send( results.rows );
  }).catch( ( error )=>{
    console.log( 'error in letters GET', error );
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
