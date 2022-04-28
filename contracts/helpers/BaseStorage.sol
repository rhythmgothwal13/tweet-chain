//SPDX-License-Identifier:MIT

pragma solidity ^0.8.9;

import './Owned.sol';

contract BaseStorage is Owned {

    modifier onlyController(){
        require(msg.sender == controllerAddr);
        _;
    }

    address public controllerAddr;

    function setControllerAddr(address _controllerAddr) public onlyOwner{
        controllerAddr = _controllerAddr;
    }
}