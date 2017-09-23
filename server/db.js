const firebase = require('firebase'),
	config = {
		apiKey: "AIzaSyBXqb4N2Kgdi5hZFvzVcHjenqPFOFZw1J8",
		authDomain: "jack-my-swag.firebaseapp.com",
		databaseURL: "https://jack-my-swag.firebaseio.com",
		projectId: "jack-my-swag",
		storageBucket: "",
		messagingSenderId: "826921485870"
	};

firebase.initializeApp(config);

module.exports = {
	createUser: (email, password, callback) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('Error createUserWithEmailAndPassword');
				console.log(error);
			});
	},
	login: (email, password, callback) => {
		firstbase.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('Error signInWithEmailAndPassword');
				console.log(error);
			});
	}
};