import { Keypair } from "@solana/web3.js";
import base58 from "bs58";

async function main(){
  const keypair = new Keypair();
  const privateKey = base58.encode(keypair.secretKey);
  const publicKey = keypair.publicKey.toString();
  console.log(`Public Key: ${publicKey}`);
  console.log(`Private Key: ${privateKey}`);
}

main();