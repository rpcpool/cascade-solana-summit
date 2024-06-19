# Cascade Transaction Delivery

Scripts that self transfers SOL with various configurations to demonstrate the importance of sending optimized transactions

Presentation: https://docs.google.com/presentation/d/1kJPX_kZbHSU_WB2v0PtSD9gARVjbgVSmG2PT6nxZzLQ/edit?usp=sharing 

Endpoints:
1. No Jet: https://tritono-main-e861.mainnet.rpcpool.com/aa6544ed-6f6a-4af9-95b0-8b6811593a84

2. Jet: https://tritono-main-e861.mainnet.rpcpool.com/1b393e72-6fe6-4945-9178-4c8de272a3c6


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