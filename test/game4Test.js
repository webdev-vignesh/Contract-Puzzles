const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game4', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game4');
    const game = await Game.deploy();

    return { game };
  }
  it('should be a winner', async function () {
    const { game } = await loadFixture(deployContractAndSetVariables);

    // nested mappings are rough :}
    await game.write('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');

    await game.win('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
