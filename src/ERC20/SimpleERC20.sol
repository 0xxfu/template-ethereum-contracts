// SPDX-License-Identifier: AGPL-1.0
pragma solidity 0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleERC20 is ERC20 {
	constructor() ERC20("SimpleERC20", "serc20") {}

	function name() public pure override returns (string memory) {
		return "Simple ERC20";
	}
}
