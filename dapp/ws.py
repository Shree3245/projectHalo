from web3 import Web3

infura_url = 'https://mainnet.infura.io/v3/ee6a8267f07a4c6a8c5ee4700fa70836'
web3 = Web3(Web3.HTTPProvider(infura_url))
web3.isConnected()
