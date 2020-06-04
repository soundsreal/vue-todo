module.exports = {
    name: 'API',
    version: '1.0.0',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 5300,
	base_url: process.env.BASE_URL || 'http://localhost:3001',
	db: {
		 uri: process.env.MONGODB_URI || 'YOUR_KEY',		
	},
};