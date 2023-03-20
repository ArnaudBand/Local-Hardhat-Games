// add the game address here and update the contract name if necessary
const gameAddr = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const contractName = "Game2";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:

    const x = await game.setX(10);
    await x.wait();
    const y = await game.setY(40);
    await y.wait();
    const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
