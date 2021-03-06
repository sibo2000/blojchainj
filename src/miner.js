const config = require('../config/miner.json');
const hasher = require('./hasher');

const pattern = '0'.repeat(config.difficulty);

module.exports = (block) => {
  if (!block.index) {
    throw new Error('Block is missing index');
  }

  if (!block.data) {
    throw new Error('Block is missing data');
  }

  if (!block.prevHash) {
    throw new Error('Block is missing prevHash');
  }

  if (!block.nonce) {
    block.nonce = 0;
  }

  while (!block.hash) {
    const hash = hasher(`${block.index}${block.nonce}${block.data}${block.prevHash}`);

    if (hash.substr(0, config.difficulty) === pattern) {
      block.hash = hash;

      break;
    }

    block.nonce++;
  }

  return block;
};
