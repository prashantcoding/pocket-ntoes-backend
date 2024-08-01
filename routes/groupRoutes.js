const express = require('express');
const { createGroup, createNote, getNotes, getAllGroups } = require('../controllers/groupController');
const router = express.Router();

// Define routes
router.post('/groups', createGroup);
router.post('/groups/:groupId/notes', createNote);
router.get('/groups/:groupId/notes', getNotes);
router.get("/groups/",getAllGroups)
module.exports = router;
