## How to start

1. Clone and install dependencies

Then:

```
npm i
```

2. Running commands

```
To compile contracts:

```
npx hardhat compile
```

To deploy contracts:
```
npx hardhat run --network rinkeby scripts/<nameOfFile>.js
```
To deploy proxy: 

```
npx hardhat run scripts/<name_of_file> --network <network_name>
```
To verify implementation manually:

```
npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
```
example:

```
npx hardhat verify --network rinkeby 0x9279791897f112a41FfDa267ff7DbBC46b96c296 "0x9326BFA02ADD2366b30bacB125260Af641031331"
```

## Verify on Etherscan

You'll need an `ETHERSCAN_API_KEY` environment variable. You can get one from the [Etherscan API site.](https://etherscan.io/apis). If you have it set, your deploy script will try to verify them by default. 

