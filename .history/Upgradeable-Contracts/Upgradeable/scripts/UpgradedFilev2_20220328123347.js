const { ethers, upgrades } = require("hardhat");

const PROXY = "proxy address you deployed"

async function main() {
    const UpgradedFilev2= await ethers.getContractFactory("UpgradedFilev2");
    await upgrades.upgradeProxy(PROXY, UpgradedFilev2, { kind: "uups" });
    console.log("UpgradedFile upgraded to version 2");
  }
  
  main();