import { ethers } from "ethers";

const TOKEN_DECIMALS = ethers.BigNumber.from("10").pow(
  ethers.BigNumber.from("18")
);
const MILLION = ethers.BigNumber.from("10").pow(ethers.BigNumber.from("6"));

const FOUR_MILLION = ethers.BigNumber.from("4")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
const TWENTY_MILLION = ethers.BigNumber.from("20")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
const PARTNER_MAX = ethers.BigNumber.from("78")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);

const TEAM_MULTISIG = "0xB8085A4b1711f74B4BC68D5D215f2A4a2Ed56c9c";
const TEAM_EOA = "0xB8085A4b1711f74B4BC68D5D215f2A4a2Ed56c9c";

const testOptimismArgs = {

  // Tokens
  WETH: "0xee01c0cd76354c383b8c7b4e65ea88d00b06f36f",
  USDC: "0xe2acf26e140f5cab0b974fc91ffae016220bf06a",

  // Addresses
  teamEOA: TEAM_EOA,
  teamMultisig: TEAM_MULTISIG,
  emergencyCouncil: "0xB8085A4b1711f74B4BC68D5D215f2A4a2Ed56c9c",

  merkleRoot:
    "",
  tokenWhitelist: [
    "0x2f3c1b6a51a469051a22986aa0ddf98466cc8d3c",
    "0xe2acf26e140f5cab0b974fc91ffae016220bf06a",
  ],
  partnerAddrs: [
    TEAM_EOA, // TEST
  ],
  partnerAmts: [],
  partnerMax: PARTNER_MAX,
};

export default testOptimismArgs;
