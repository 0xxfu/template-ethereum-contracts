import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { parseEther } from 'ethers';
import { storeAddressList } from "../utils/contractAddress";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer, simpleERC20Beneficiary } = await getNamedAccounts();

	const SimpleERC20 = await deploy('SimpleERC20', {
		from: deployer,
		args: [],
		log: true,
		autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
	});

	let addressObj = {
		// Contarct deployed local datetime, UTC+8
		DeployedDatetime: new Date().toLocaleString("zh-CN"),
		SimpleERC20: SimpleERC20.address,
	}
	storeAddressList(addressObj, hre.network.name)
};
export default func;
func.tags = ['SimpleERC20'];
