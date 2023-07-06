//import ethers from hardhat package
//const { hre } = require ("hardhat");


//import ethers
const{hre, ethers} = require("hardhat");
async function main(){ 
    // to identify the script we want to deploy 
  //const contract = await ethers.deployContract("NFTee")
  const contract = await ethers.getContractFactory("NFTee");

  //deploy it
 //await contract.waitForDeployment();
 const deployedContract = await contract.deploy();

 await deployedContract.deployed();

  //Print address of deployed contract
  console.log("Your contract has been deployedd to", deployedContract.address);
}

main()
.then(() => process.exit(0))
.catch((error)=> {console.error(error);
    process.exit(1);});