var mongoose = require('mongoose');
var async = require('async');

var userIds = [];
var userList = [
	{
		name: 'Name0',
		lastname: 'Lastname1',
		age: 20,
		isActive: false	
	},
	{
		name: 'Name4',
		lastname: 'Lastname5',
		age: 60,
		isActive: false	
	},
	{
		name: 'Name8',
		lastname: 'Lastname9',
		age: 100,
		isActive: false	
	},
];
function createUserTestData(done) {
    var userModel = mongoose.model('user');

	var userModels = userList.map(function (user) {
        return new userModel(user);
    });

    var deferred = [
        userModel.remove.bind(userModel)
    ];

    deferred = deferred.concat(userModels.map(function (user) {
        return user.save.bind(user);
    }));

    async.series(deferred, done);
}
function setUserIds(done) {
    mongoose.model('user').find().exec(function (err, results) {
        if (err) {
            return done(err);
        }

        userIds = [];
        results.forEach(function(user){
            userIds.push(user._id);
        });

        return done();
    });
}
function getUserIds() {
    return userIds;
}

var placeIds = [];
var placeList = [
	{
		name: 'Name12',
		description: 'Description13',
		location: {
			coordinates: [
				-5.9859841,
				-5.9859841
			],
			type: 'Point'
		},
		picture: 'Picture15'	
	},
	{
		name: 'Name16',
		description: 'Description17',
		location: {
			coordinates: [
				-5.9859841,
				-5.9859841
			],
			type: 'Point'
		},
		picture: 'Picture19'	
	},
	{
		name: 'Name20',
		description: 'Description21',
		location: {
			coordinates: [
				-5.9859841,
				-5.9859841
			],
			type: 'Point'
		},
		picture: 'Picture23'	
	},
];
function createPlaceTestData(done) {
    var placeModel = mongoose.model('place');

	var placeModels = placeList.map(function (place) {
        return new placeModel(place);
    });

    var deferred = [
        placeModel.remove.bind(placeModel)
    ];

    deferred = deferred.concat(placeModels.map(function (place) {
        return place.save.bind(place);
    }));

    async.series(deferred, done);
}
function setPlaceIds(done) {
    mongoose.model('place').find().exec(function (err, results) {
        if (err) {
            return done(err);
        }

        placeIds = [];
        results.forEach(function(place){
            placeIds.push(place._id);
        });

        return done();
    });
}
function getPlaceIds() {
    return placeIds;
}

var newwIds = [];
var newwList = [
	{
		newAttribute: true	
	},
	{
		newAttribute: false	
	},
	{
		newAttribute: true	
	},
];
function createNewwTestData(done) {
    var newwModel = mongoose.model('neww');

	var newwModels = newwList.map(function (neww) {
        return new newwModel(neww);
    });

    var deferred = [
        newwModel.remove.bind(newwModel)
    ];

    deferred = deferred.concat(newwModels.map(function (neww) {
        return neww.save.bind(neww);
    }));

    async.series(deferred, done);
}
function setNewwIds(done) {
    mongoose.model('neww').find().exec(function (err, results) {
        if (err) {
            return done(err);
        }

        newwIds = [];
        results.forEach(function(neww){
            newwIds.push(neww._id);
        });

        return done();
    });
}
function getNewwIds() {
    return newwIds;
}

module.exports = {
    createUserTestData: createUserTestData,
    setUserIds: setUserIds,
	getUserIds: getUserIds,
    createPlaceTestData: createPlaceTestData,
    setPlaceIds: setPlaceIds,
	getPlaceIds: getPlaceIds,
    createNewwTestData: createNewwTestData,
    setNewwIds: setNewwIds,
	getNewwIds: getNewwIds,
};
