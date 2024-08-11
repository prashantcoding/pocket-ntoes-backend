const Group = require('../models/Groups');
const Note = require('../models/Notes');



const createGroup = async (req, res) => {
    const { name, color } = req.body;
  
    try {
      
      const existingGroup = await Group.findOne({ name });
      if (existingGroup) {
        
        return res.status(409).json({ message: 'Group with this name already exists.' });
      }
  
     
      const newGroup = new Group({ name, color });
      const savedGroup = await newGroup.save();
  
      // Respond with the created group
      res.status(201).json(savedGroup);
    } catch (error) {
      // Handle errors, e.g., validation errors
      res.status(400).json({ message: error.message });
    }
  };
  
const getAllGroups = async (req, res) => {
    try {
      // Retrieve groups with _id, name, and color fields
      const groups = await Group.find().select('_id name color');
      res.json(groups);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Create a new note in a group
const createNote = async (req, res) => {
  const { groupId } = req.params;
  const newNote = new Note({
    content: req.body.content,
    group: groupId
  });

  try {
    const savedNote = await newNote.save();
    await Group.findByIdAndUpdate(groupId, { $push: { notes: savedNote._id } });
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
  const { groupId } = req.params;
  try {
    const group = await Group.findById(groupId).populate('notes');
    if (!group) return res.status(404).json({ message: 'Group not found' });
    res.json(group.notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createGroup,
  createNote,
  getNotes,
  getAllGroups
};
