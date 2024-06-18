# Cascade Transaction Delivery

Scripts that self transfers SOL with various configurations to demonstrate the importance of sending optimized transactions

### Prerequisites
1. NodeJS: https://nodejs.org/en/download/package-manager 
2. Wallet private key. See #generate-private-key
3. Very little mainnet SOL (0.05 SOL). It'll be transferred to yourself

### Scripts
1. `optimized.mjs`: Sends optimized transactions by following this [doc](https://docs.triton.one/chains/solana/sending-txs)
2. `unoptimized.mjs`: Sends unoptimized transaction with default config

### Getting Started
1. Install dependencies: `npm install`
2. Create and add the following dependencies in `.env` file
   1. `RPC_ENDPOINT`: The provided RPC Endpoint
   2. `WALLET_PRIVATE_KEY`: base58 encoded wallet private key
3. Run the script `node optimized.js`

### generate-private-key
1. Execute `node keypair.mjs`. It'll output the public and private keys. Send some nominal amount of SOL to it. 0.05 will be suffcient.

NOTE: You'll be transferring the SOL to yourself