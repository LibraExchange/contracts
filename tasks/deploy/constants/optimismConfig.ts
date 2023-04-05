import { ethers } from "ethers";

const TOKEN_DECIMALS = ethers.BigNumber.from("10").pow(
  ethers.BigNumber.from("18")
);
const MILLION = ethers.BigNumber.from("10").pow(ethers.BigNumber.from("6"));

const FOUR_MILLION = ethers.BigNumber.from("4")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
const TEN_MILLION = ethers.BigNumber.from("10")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
const TWENTY_MILLION = ethers.BigNumber.from("20")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
  const SIXTY_MILLION = ethers.BigNumber.from("60")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
const PARTNER_MAX = ethers.BigNumber.from("78")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);

const TEAM_MULTISIG = "0xA4380787118AC422CfD71B3B0EccaC0E3B24Efb9";
const TEAM_EOA = "0xA4380787118AC422CfD71B3B0EccaC0E3B24Efb9";

const optimismConfig = {
  // Tokens
  WETH: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  USDC: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",

  // Addresses
  teamEOA: TEAM_EOA,
  teamMultisig: TEAM_MULTISIG,
  emergencyCouncil: "0xA4380787118AC422CfD71B3B0EccaC0E3B24Efb9",

  merkleRoot:
    "",
  tokenWhitelist: [
    "0x82af49447d8a07e3bd95bd0d56f35241523fbab1", // WETH
    "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", // USDC
    "0x17fc002b466eec40dae837fc4be5c67993ddbd6f", // FRAX
    "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // DAI
    "0xA970AF1a584579B618be4d69aD6F73459D112F95", // sUSD
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", // USDT
  ],
  partnerAddrs: [
    TEAM_EOA, // LIBRA
  ],
  partnerAmts: [],
  partnerMax: PARTNER_MAX,
  presaleAmt: SIXTY_MILLION
};

export default optimismConfig;
