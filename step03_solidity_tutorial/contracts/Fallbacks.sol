//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Fallbacks {
    // ******************************//
    // ********* FallBack Functions **********//
    // ******************************//
    /* 
        Fallback function is a special function available to a contract. 
        It has following features −
            It is called when a non-existent function is called on the contract.
            It is required to be marked external.
            It has no name.
            It has no arguments
            It can not return any thing.
            It can be defined one per contract.
            If not marked payable, 
                it will throw exception if contract receives plain ether without data.
        There are two parts of fallback in recent solidity updated
            - recieve for sending ether to contract
            - fallback to call a particular function
    */
    uint256 public countReceive;
    uint256 public countFallback;

    mapping(address => uint256) public receiveBalance;
    mapping(address => uint256) public fallbackBalance;

    function addSome() public {
        countReceive += 20;
        countFallback += 20;
    }

    receive() external payable {
        countReceive++;
        receiveBalance[msg.sender] += msg.value;
    }

    fallback() external payable {
        countFallback++;
        fallbackBalance[msg.sender] += msg.value;
    }
}

contract Fallbacks1 {
    function testFunctionCall(address _contractAddress) public {
        (bool success, ) = _contractAddress.call(
            abi.encodeWithSignature("helloWorld()")
        );
        require(success);
    }
}

contract Fallbacks2 {
    function testFunctionCall(
        address _contractAddress,
        string memory _signature
    ) public {
        (bool success, ) = _contractAddress.call(
            abi.encodeWithSignature(_signature)
        );
        require(success);
    }
}
