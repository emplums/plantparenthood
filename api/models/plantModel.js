var mongoose = require('mongoose');
var Scheme = mongoose.Scheme;

var plantScheme = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the plant'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  days_to_germination: {
    type: Number
  },
  spacing: {
    type: Number
  },
  sow_weeks: {
    type: Number
  }
});

module.exports = mongoose.model('Plants', PlantSchema);
