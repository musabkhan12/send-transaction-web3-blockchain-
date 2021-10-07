const Web3 =require ("web3")
const web3 = new Web3("http://localhost:8545")
const address_from = "0x90234cABd66E35944Db99C21b694EBafB01fc55E";
const address_to =   "0xaE490f822ebfBA963B9CC108e302162af7ed43E7";
const private_key =  "cfb12c8431c6b2bb012ee0e33f68b368209ee8bf4091b8519f37aca9e83bd4ec"

const transaction = async() =>{

const value = web3.utils.toWei('9' , 'ether');

const SignedTransaction = await web3.eth.accounts.signTransaction(
{
    to : address_to,
    value : value,
      gas : 2000000,
    
},private_key)
web3.eth.sendSignedTransaction(SignedTransaction.rawTransaction).then(
    (receipt)=>{
        console.log(receipt)
        console.log("transaction is processing: ", receipt.contractAddress)
    })
}

transaction();