import { ethers } from "hardhat";
import { Fallbacks, Fallbacks__factory } from "../typechain";

async function main() {
  const [owner, addr1, addr2] = await ethers.getSigners();
  // We get the contract to deploy
  // const Fallbacks: Fallbacks__factory = await ethers.getContractFactory(
  //   "Fallbacks"
  // );
  // const fallbacks: Fallbacks = await Fallbacks.deploy();

  const Fallbacks = await ethers.getContractFactory("Fallbacks");
  const fallbacks = await Fallbacks.deploy();

  await fallbacks.deployed();

  console.log("Fallbacks deployed to:", fallbacks.address);

  console.log("**********");
  console.log(
    "Balance of contarct : ",
    (await ethers.provider.getBalance(fallbacks.address)).toString()
  );

  console.log(
    "Receive Counter = ",
    (await fallbacks.countReceive()).toString()
  );
  console.log(
    "Fallback Counter = ",
    (await fallbacks.countFallback()).toString()
  );

  console.log(
    "Receive Balance = ",
    (await fallbacks.receiveBalance(addr1.address)).toString()
  );
  console.log(
    "Fallback Balance = ",
    (await fallbacks.fallbackBalance(addr1.address)).toString()
  );

  const sendEther1 = await addr1.sendTransaction({
    to: fallbacks.address,
    value: ethers.utils.parseEther("1"),
  });
  const sendEther2 = await addr1.sendTransaction({
    to: fallbacks.address,
    value: ethers.utils.parseEther("1"),
  });
  const data1 = await addr1.sendTransaction({
    to: fallbacks.address,
    value: ethers.utils.parseEther("1"),
    data: "0x2344",
  });

  console.log("**********");
  console.log(
    "Balance of contarct : ",
    (await ethers.provider.getBalance(fallbacks.address)).toString()
  );

  console.log(
    "Receive Counter = ",
    (await fallbacks.countReceive()).toString()
  );
  console.log(
    "Fallback Counter = ",
    (await fallbacks.countFallback()).toString()
  );

  console.log(
    "Receive Balance = ",
    (await fallbacks.receiveBalance(addr1.address)).toString()
  );
  console.log(
    "Fallback Balance = ",
    (await fallbacks.fallbackBalance(addr1.address)).toString()
  );
  console.log("**********");
  console.log("**********");

  // ********
  // ********
  // ********
  // ********
  // ********
  const Fallbacks1 = await ethers.getContractFactory("Fallbacks1");
  const fallbacks1 = await Fallbacks1.deploy();

  await fallbacks1.deployed();

  console.log("Fallbacks1 deployed to:", fallbacks1.address);
  await fallbacks1.testFunctionCall(fallbacks.address);
  await fallbacks1.testFunctionCall(fallbacks.address);
  await fallbacks1.testFunctionCall(fallbacks.address);
  await fallbacks1.testFunctionCall(fallbacks.address);
  await fallbacks1.testFunctionCall(fallbacks.address);
  console.log(
    "Balance of contarct : ",
    (await ethers.provider.getBalance(fallbacks.address)).toString()
  );

  console.log(
    "Receive Counter = ",
    (await fallbacks.countReceive()).toString()
  );
  console.log(
    "Fallback Counter = ",
    (await fallbacks.countFallback()).toString()
  );

  console.log(
    "Receive Balance = ",
    (await fallbacks.receiveBalance(addr1.address)).toString()
  );
  console.log(
    "Fallback Balance = ",
    (await fallbacks.fallbackBalance(addr1.address)).toString()
  );
  console.log("**********");
  console.log("**********");
  // ********
  // ********
  // ********
  // ********
  // ********
  const Fallbacks2 = await ethers.getContractFactory("Fallbacks2");
  const fallbacks2 = await Fallbacks2.deploy();

  await fallbacks2.deployed();

  console.log("Fallbacks2 deployed to:", fallbacks2.address);
  await fallbacks2.testFunctionCall(fallbacks.address, "addSome()");
  console.log(
    "Balance of contarct : ",
    (await ethers.provider.getBalance(fallbacks.address)).toString()
  );

  console.log(
    "Receive Counter = ",
    (await fallbacks.countReceive()).toString()
  );
  console.log(
    "Fallback Counter = ",
    (await fallbacks.countFallback()).toString()
  );

  console.log(
    "Receive Balance = ",
    (await fallbacks.receiveBalance(addr1.address)).toString()
  );
  console.log(
    "Fallback Balance = ",
    (await fallbacks.fallbackBalance(addr1.address)).toString()
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
