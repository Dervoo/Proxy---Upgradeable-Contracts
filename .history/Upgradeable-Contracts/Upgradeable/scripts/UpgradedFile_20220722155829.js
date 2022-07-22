const hre = require("hardhat");
const { ethers, upgrades } = require("hardhat");
const { verify } = require("../utils.js");
const upgradesCore = require("@openzeppelin/upgrades-core")

async function main() {
    const UpgradedFile= await ethers.getContractFactory("UpgradedFile");
    const upgradedfile= await upgrades.deployProxy(UpgradedFile, { kind: "uups" });
    await upgradedfile.deployed();
    console.log("UpgradedFile deployed to:", upgradedfile.address);

    const implementationAddress = await upgradesCore.getImplementationAddress(ethers.provider, proxy.address)
    console.log("Implementation deployed to: ", implementationAddress)

    verify(implementationAddress, [])
    verify(UpgradedFile.address, [])
    console.log("Verified")
  }
  
  main();