/**
 * ServerController
 *
 * @description :: Server-side logic for managing Servers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	seed: function(req, res){
		// Seeding my database LUL
	  Data.create({category: 'forecast', content: 'awal'}).exec(function (err, finn){
			Data.create({category: 'status', content: 'true'}).exec(function (err, finn){
				res.json({notification: 'bisa'});
		  });
	  });
	},
	store_status: function(req, res) {
		Data.update({category: 'status'}, {content: req.body.status}).exec(function (err, updated){
			if (err) {res.json({error: true});}
			else {
				res.json({
					notification: 'Status has been updated to ' + req.body.status,
					error: false
				});
			}
		});
	},
	store_forecast: function(req,res){
		Data.update({category: 'forecast'}, {content: req.body.forecast}).exec(function (err, updated){
			if (err) {res.json({error: true});}
			else{
				res.json({
					notification: 'Forecast data has been updated. \n DATA : \n ' + req.body.forecast,
					error: false
				 });
			}
		});
	},
	fetch_status: function(req, res){
		Data.findOne({category: "status"}).exec(function (err, finn){
			if (err) {
				return res.json({error: true});
			}else {
				return res.json({
					status: finn.content,
					error: false
				});
			}
		});
	},
	fetch_forecast: function(req, res){
		Data.findOne({category: "forecast"}).exec(function (err, finn){
			if (err){
				return res.json({error: true});
			} else {
				return res.json({
					forecast: finn.content,
					error: false
				});
			}
		});
	}
};
