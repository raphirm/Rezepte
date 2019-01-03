require('dotenv').load();
require('dotenv').config();


var keystone = require('keystone');
var chai = require('chai');

keystone.init({
	'name': 'Rezepte',
	's3 config': {} //leave this here or stuff will break (magic)
});

keystone.import('../models');

chai.should();
