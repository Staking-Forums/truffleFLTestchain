// const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider")
require("dotenv").config()
//https://sandbox.truffleteams.com/656b60ed-0f52-4c71-b62f-2fe253c01dfa
//forget predict lemon amused south hood any dismiss spy gown cement napkin
module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration> to customize your Truffle configuration!
	contracts_build_directory: path.join(__dirname, "contracts"),
	
	networks: {
		development: {
			host: "127.0.0.1",
			port: 3468,
			network_id: "3468", // match any network
			websockets: false,
		},
		live: {
			host: "178.25.19.88", // Random IP for example purposes (do not use)
			port: 80,
			network_id: 1,        // Ethereum public network
			// optional config values:
			// gas
			// gasPrice
			// from - default address to use for any transaction Truffle makes during migrations
			// provider - web3 provider instance Truffle should use to talk to the Ethereum network.
			//          - function that returns a web3 provider instance (see below.)
			//          - if specified, host and port are ignored.
			// skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
			// timeoutBlocks: - if a transaction is not mined, keep waiting for this number of blocks (default is 50)
		}
	},
	compilers: {
		solc: {
			version: "^0.6.6",
		},
	},
};