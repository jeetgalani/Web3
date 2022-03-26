
const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Mario", "Luigi", "Peach"],       // Names
      ["https://i.imgur.com/COpBEoN.png", // Images
      "https://i.imgur.com/iekHvmd.png", 
      "https://i.imgur.com/7HxqJK8.png"],
      [100, 200, 300],                    // HP values
      [100, 50, 25]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  