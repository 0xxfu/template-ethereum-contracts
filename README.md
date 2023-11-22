# Boilerplate for ethereum solidity smart contract development

## Install

```bash
yarn
```

## Test

There are 2 flavors of tests: hardhat, dapptools and forge

### hardhat

-   One using hardhat that can leverage hardhat-deploy to reuse deployment procedures and named accounts:

```bash
yarn test
```

### forge

```bash
forge test
```

This require the installation of forge (see [foundry](https://github.com/gakonst/foundry))

## Trace transaction

```
cast run --quick --rpc-url https://url 0xTransactionHash
```

```
npx hardhat trace --hash 0xTransactionHash --rpc https://url
```

## Tools


### Ityfuzz

- Install [Blazo](https://github.com/0xxfu/blazo)
- Install [Ityfuzz](https://github.com/fuzzland/ityfuzz)
- Run:

```
blazo . -s -p -f src/SetUp/SetupSimpleERC20.sol:SetupSimpleERC20
```