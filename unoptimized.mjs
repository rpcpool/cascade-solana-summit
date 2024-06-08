import dotenv from "dotenv";
import {
  Connection,
  Keypair,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import bs58 from "bs58";
dotenv.config();

const RPC_ENDPOINT =
  process.env.RPC_ENDPOINT || "https://api.mainnet-beta.solana.com";

const USER_KEYPAIR = Keypair.fromSecretKey(
  bs58.decode(process.env.WALLET_PRIVATE_KEY)
);

async function main() {
  const connection = new Connection(RPC_ENDPOINT);

  const blockhashResult = await connection.getLatestBlockhash();

  // V0 transaction message
  const messagev0 = new TransactionMessage({
    payerKey: USER_KEYPAIR.publicKey,
    recentBlockhash: blockhashResult.blockhash,
    instructions: [
      // Instruction for SOL transfer
      SystemProgram.transfer({
        fromPubkey: USER_KEYPAIR.publicKey,
        toPubkey: USER_KEYPAIR.publicKey,
        lamports: 5000,
      }),
    ],
  }).compileToV0Message();

  // V0 transaction
  const tx = new VersionedTransaction(messagev0);

  tx.sign([USER_KEYPAIR]);

  console.log(`${new Date().toISOString()} Sending Transaction`);

  const startTime = performance.now();

  const signature = await connection.sendRawTransaction(tx.serialize());

  console.log(`${new Date().toISOString()} Confirming Transaction`);

  const confirmedTransaction = await connection.confirmTransaction({
    signature: signature,
    blockhash: blockhashResult.blockhash,
    lastValidBlockHeight: blockhashResult.lastValidBlockHeight,
  });

  console.log(
    `${new Date().toISOString()} Confirmed transaction in ${
      performance.now() - startTime
    }ms`
  );
  console.log(`https://explorer.solana.com/tx/${signature}`);
}

main();
