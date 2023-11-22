// SPDX-License-Identifier: AGPL-1.0
pragma solidity 0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {SimpleERC20} from "../ERC20/SimpleERC20.sol";

contract SetupSimpleERC20 {
	function setUp() external {
		new SimpleERC20();
	}
}
