import Antenna from 'iotex-antenna';

const chainMeta = async () => {
  const antenna = new Antenna('http://api.testnet.iotex.one:80');

  const meta = await antenna.iotx.getChainMeta({});

  return meta.chainMeta;
};

const run = async () => {
  const meta = await chainMeta();
  console.log(`current tip ${meta.height}`);
};

run();
