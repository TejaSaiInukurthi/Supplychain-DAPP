# Supplychain-Ethereum

After taking the clone, follw these steps to run the DApp

Step1 : npm install
this step will install the packages

Step2 : truffle compile
This step will compile pur smartcontracts.

Step 3 : truffle migrate --network //netowrkname
This step will deploy the contract in metioned testney in truffleconfig,js
You can change the truffleconfig.js and mention the testnet you want to deploy

step 4: After successfully deploy copy the contract address and abi from build/contracts/assettracker.json file and pass that data in src/js/index/js inplace of contract and abi varaible

step 5: npm run dev

Done your runing your own dapp in your local host