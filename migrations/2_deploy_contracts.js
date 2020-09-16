let Flashloan = artifacts.require("Flashloan")

module.exports = async function (deployer, network) {
    try {

        let lendingPoolAddressesProviderAddress;

        switch(network) {
            case "mainnet":
            case "mainnet-fork":
            case "development": // For Ganache mainnet forks
                lendingPoolAddressesProviderAddress = "0x1A22a75c06A2Db11479b7577602E73579aFD5f3B"; break
            case "ropsten":
            case "ropsten-fork":
                lendingPoolAddressesProviderAddress = "0x1A22a75c06A2Db11479b7577602E73579aFD5f3B"; break
            case "kovan":
            case "kovan-fork":
                lendingPoolAddressesProviderAddress = "0x1A22a75c06A2Db11479b7577602E73579aFD5f3B"; break
            default:
                throw Error(`Are you deploying to the correct network? (network selected: ${network})`)
        }

        await deployer.deploy(Flashloan, lendingPoolAddressesProviderAddress)
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}