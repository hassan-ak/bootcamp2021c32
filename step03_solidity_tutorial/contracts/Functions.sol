//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Functions {
    // ******************************//
    // ********* Functions **********//
    // ******************************//
    /* 
        Grouping of code to do repetative tasks.
        to define a function in Solidity 
            - is by using the function keyword, 
            - followed by a unique function name, 
            - a list of parameters (that might be empty), 
            - and a statement block surrounded by curly braces.
        To invoke a function somewhere later in the Contract, 
            - you would simply need to write the name of that function
        A function can take multiple parameters separated by comma
        return statement is required if you want to return a value from a function
        Function Modifiers are used to modify the behaviour of a function.
        View Functions
            - View functions ensure that they will not modify the state
        Pure Functions
            - ensure that they not read or modify the state
    */
    /*
     ********
     ********
     ********
     */
    //  Example 01
    uint256 private counter = 56;

    function doSomething() public view returns (uint256) {
        return counter;
    }

    //  Example 02
    function checkPureFunction(uint256 _val) public pure returns (uint256) {
        return _val * 23;
    }

    // Example 03
    function mutiVal() public view returns (uint256, bool) {
        return (counter, false);
    }

    // Example 04
    function mutiVal1() public view returns (uint256 index, bool isPaid) {
        index = 4 * counter;
        isPaid = true;
    }

    /*
     ********
     ********
     ********
     */
    //  Function Modifiers are used to modify the behaviour of a function.
    // Example 05 06 07
    address public treasureAddress;
    address public owner;
    uint256 public price = 0.01 ether;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner can call");
        // Can be multiple conditions
        _;
    }

    modifier verifyAmount() {
        if (msg.sender == owner) {
            _;
        }
    }

    modifier verifyAmount1(uint256 _amount) {
        require(price == _amount,"Incorrect value provided");
        _;
    }

    function updateTreasureAddress(address _treasury) public onlyOwner {
        treasureAddress = _treasury;
    }

    function updateTreasureAddress1(address _treasury) public verifyAmount {
        treasureAddress = _treasury;
    }

    function updateAmount(uint256 _value) public verifyAmount1(_value) {
        price = _value;
        counter++;
    }
}
