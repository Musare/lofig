window.lofig = {
	folder: 'config/default.json',
	get: (query, cb) => {
		return fetch(lofig.folder)
			.then(response => {
				return response.json();
			}).then(json => {
				query.split('.')
					.forEach(property => {
						json = json[property];
					});

				if (cb) return cb(json);
				else return json;
			}).catch(err => {
				console.log('parsing failed', err);
			});
	},
	has: (query, cb) => {
		return fetch(lofig.folder)
			.then(response => {
				return response.json();
			}).then(json => {
				query.split('.')
					.forEach(property => {
						json = json[property];
					});

				if (cb) return cb(json);
				return json;
			}).catch(err => {
				console.log('parsing failed', err);
			});
	}
};
