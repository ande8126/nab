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

//POST ROUTE TO SEND NEW REQUEST TO DB
//STILL NEED TO ADD FOREIGN KEYS FOR USER/LETTER TABLES
//(MORE REQ.BODYS)
router.post('/', (req, res) => {
  let title = req.body.title;
  let recipient = req.body.recipient;
  let email_body = req.body.email_body;
  console.log( 'in requests POST:', title, recipient, email_body );
  queryText = `INSERT INTO "requests" ( "title", "recipient", "email_body") VALUES ( $1, $2, $3 );`;
  pool.query( queryText, [ title, recipient, email_body ] ).then( ( results )=>{
    res.sendStatus( 201 );
  }).catch( ( error )=>{
    console.log( 'error in requests POST', error );
    res.sendStatus( 500 );
  })
});

//DELETE ROUTE TO...DELETE THE REQUEST
router.delete( '/:requestId', ( req, res )=>{
  console.log( 'in request DELETE', req.params );
  let id = req.params.requestId
  let queryText = `DELETE FROM "requests" WHERE id = $1;`;
  pool.query( queryText, [ id ]).then( ( results )=>{
    //confirm delete w/OK
    res.sendStatus( 200 );
  }).catch( ( error )=>{
    console.log( 'error in request DELETE', error );
    res.sendStatus( 500 );
  })
})

//PUT ROUTE TO TOGGLE RESPONSE BOOLEAN
////-DO I want to add a date w/response? -////
router.put( '/:requestId', ( req, res )=>{
  console.log( 'in request PUT with:', req.params );
  let id = req.params.requestId;
  let queryText = `UPDATE "requests" SET "response" = true WHERE id=$1;`;
  pool.query( queryText, [ id ] ).then( ( results )=>{
    //confirm put w/OK
    res.sendStatus( 200 );
  }).catch( ( error )=>{
    console.log( 'error in PUT', error);
    res.sendStatus( 500 );
  })
})



module.exports = router;
