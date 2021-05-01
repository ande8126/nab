const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//get specific letter for textbox
router.get('/:letterId', (req, res) => {
  console.log( 'in letter.router GET', req.params )
    letterId = req.params.letterId
    let queryText = `SELECT * FROM "letters" WHERE "id"=$1;`;
    pool.query( queryText, [ letterId ] ).then( ( results )=>{
      res.send( results.rows );
    }).catch( ( error )=>{
      console.log( 'error in letters GET', error );
      res.sendStatus( 500 );
    })
  })
//get all letter data for StateDropdown
router.get('/', (req, res) => {
  console.log( 'in all letters GET' );
  let queryText = `SELECT * FROM "letters";`;
  pool.query( queryText ).then( ( results )=>{
    res.send( results.rows );
  }).catch( ( error )=>{
    console.log( 'error in all letters GET', error );
    res.sendStatus( 500 );
  })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
