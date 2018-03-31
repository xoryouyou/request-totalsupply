var ERC20ABI = require('./ERC20ABI');

var infuraEndpoint = "https://mainnet.infura.io/BoXLHYmbxgDsfDWrCLg7";
var web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint));
var req = web3.eth.contract(ERC20ABI).at("0x8f8221afbb33998d8584a2b05749ba73c37a938a");

// get's the total token supply from the Mainnet contract
function getTotalSupply() {
        //https://etherscan.io/token/0x8f8221afbb33998d8584a2b05749ba73c37a938a
        req.totalSupply.call(function(err,result){
            
            var d = new web3.BigNumber(10).toPower(18);
            var totalSupply = result.div(d);

            var root = document.getElementById('root');
            root.innerHTML = '';
            var text = document.createTextNode("Total Supply:" + totalSupply.toNumber());
            root.appendChild(text);
        })	
}
// call once
getTotalSupply();
// call every 15s
setInterval( getTotalSupply, 15000);
