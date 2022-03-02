import { ethers } from "hardhat";
// import { Functions, Functions__factory } from "../typechain";

async function main() {
  // We get the contract to deploy
  // const Functions: Functions__factory = await ethers.getContractFactory(
  //   "Functions"
  // );
  // const functions: Functions = await Functions.deploy();

  const Functions = await ethers.getContractFactory("Functions");
  const functions = await Functions.deploy();

  await functions.deployed();

  console.log("Functions deployed to:", functions.address);
  console.log("*** Functions, View, Pure ***");
  const val = await functions.doSomething();
  console.log("Example 01 Results : ", val.toString());
  const val1 = await functions.checkPureFunction(11);
  console.log("Example 02 Results : ", val1.toString());
  const val2 = await functions.mutiVal();
  console.log("Example 03 Results : ", val2.toString());
  console.log("Example 03 Results : ", val2[0].toString());
  console.log("Example 03 Results : ", val2[1]);
  const val3 = await functions.mutiVal1();
  console.log("Example 04 Results : ", val3.toString());
  console.log("Example 04 Results : ", val3[0].toString());
  console.log("Example 04 Results : ", val3[1]);
  console.log("*** Function Modifiers ***");
  const [owner, addr1, addr2] = await ethers.getSigners();
  console.log("Owner Address = ", owner.address);
  console.log("Contract Owner Address = ", await functions.owner());
  console.log("Treasure Address = ", await functions.treasureAddress());
  const txt1 = await functions.updateTreasureAddress(addr1.address);
  console.log("Contract Owner Address = ", await functions.owner());
  console.log("Treasure Address = ", await functions.treasureAddress());
  const txt2 = await functions
    .connect(addr2)
    .updateTreasureAddress1(addr1.address);
  console.log("Contract Owner Address = ", await functions.owner());
  console.log("Treasure Address = ", await functions.treasureAddress());
  // const txt3 = await functions
  //   .connect(addr2)
  //   .updateTreasureAddress(addr1.address);
  // console.log("Contract Owner Address = ", await functions.owner());
  // console.log("Treasure Address = ", await functions.treasureAddress());
  const val4 = await functions.doSomething();
  console.log("Counter before update : ", val4.toString());
  const txt5 = await functions.updateAmount(ethers.utils.parseEther("0.01"));
  const val5 = await functions.doSomething();
  console.log("Counter after update : ", val5.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
