const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MarketPlace", function () {
  it("Shouldcreate and execute market sales", async function () {
    const MarketPlace = await ethers.getContractFactory("MarketPlace");
    const marketplace = await MarketPlace.deploy();
    await marketplace.deployed();
    const marketAddress = marketplace.address

    console.log('marketAddress ', marketAddress)
  });
  
});
