pragma solidity ^0.4.23;

contract Ownable {
  address public owner;


  event OwnershipRenounced(address indexed previousOwner);
  event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner
  );


  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  constructor() public {
    owner = msg.sender;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    emit OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }
}

contract WhiteList is Ownable {
	mapping (address => uint8) public whitelistBonus;

	function addToWhitelist(address _address, uint8 _bonus) onlyOwner public returns(bool) {
    	require(_bonus != 0);
    	whitelistBonus[_address] = _bonus;
    	return true;
  	}

	function getBonus(address _address) public view returns(uint8) {
		return whitelistBonus[_address];
    // return "result getBonus";
	}
}
