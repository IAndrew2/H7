const router = require('express').Router();
const store = require('../db/store');
router.get('/notes', (req, res) => {
    store.getNotes().then(notes => {
        res.json(notes)
        
    }).catch(error => {
        res.json(error)
    })

});
router.post('/notes', (req, res) => {
    store.addNote().then(notes => {
        req.body(notes)
    }).catch(error => {
        req.body(error)
    })
});
router.delete('/notes/:id', (req, res) => {
        req.params.id
});
module.exports = router;