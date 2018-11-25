pragma solidity ^0.4.17;

contract CryptstarterFactory {
    address[] public deployedContracts;
    
    function createCryptstarter(uint minimumContribution) public {
        address newCryptstarter = new Cryptstarter(minimumContribution, msg.sender);
        deployedContracts.push(newCryptstarter);
    }
    
    function getDeployedContracts() public view returns(address[]) {
        return deployedContracts;
    }
    
}

contract Cryptstarter {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    // restrict to manager of contract
    modifier restrictedToManager() {
        require(msg.sender == manager);
        _;
    }
    
    // restrict to investor
    modifier restrictedToInvestor() {
        require(investors[msg.sender]);
        _;
    }
    
    Request[] public requests; 
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public investors;
    uint investorCount;
    
    function Cryptstarter(uint minContribution, address creator) public {
        manager = creator;
        minimumContribution = minContribution;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        investors[msg.sender] = true;
        investorCount++;
    }
    
    // create payment requests
    function paymentRequest(string description, uint value, address recipient) public restrictedToManager {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public restrictedToInvestor {
        Request storage request = requests[index];
        
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount ++;
    }
    
    // enable manager to payout request if investors approve
    function finaliseRequest(uint index) public restrictedToManager {
        Request storage request = requests[index];
        
        require(request.approvalCount > investorCount / 2);
        require(!request.complete);
        request.recipient.transfer(request.value);
        request.complete = true;
    }
    
}
