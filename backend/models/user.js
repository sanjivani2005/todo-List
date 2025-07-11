const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
    },
  ],
},
{
  timestamps: true, // Automatically manage createdAt and updatedAt fields          });
    });
module.exports = mongoose.model('User', userSchema);
