'use strict';

module.exports = {
	theme: {
		slug: 'wordcampmga2019',
		name: 'wordcampmga2019',
		author: 'Marcos Moreno'
	},
	dev: {
		browserSync: {
			live: true,
			proxyURL: 'localhost',
			bypassPort: '80'
		},
		browserslist: [ // See https://github.com/browserslist/browserslist
			'> 1%',
			'last 2 versions'
		],
		debug: {
			styles: false, // Render verbose CSS for debugging.
			scripts: false // Render verbose JS for debugging.
		}
	},
	export: {
		compress: true
	}
};
