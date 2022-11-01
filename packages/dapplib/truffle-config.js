require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift raise saddle exchange good civil army gaze'; 
let testAccounts = [
"0xf398bc3bdc78b821181602a46541e5a432e2f570af24a6c97cb784f360715284",
"0xc8483670ac5dcebec25a12e1c095f40585bd1d8cf15fb8b2f9c5aeddf1a42efd",
"0x74e6eb3f4247778a7676b621817bfa4ba51b41ffb305f8ed5e38000e991ce948",
"0x2f3559028d951e8478fb072a21d35719221c78e2f27ffc51b477272b5ad8c490",
"0xf86d3534da2a11107a3cbd978269ca7ffeaac9a2be4b5f9b4b9b896efd675a92",
"0xd54e723c87e19183dd493b091956cb7b6d0e9ecc40a99c5ef72235d9c56cad74",
"0x54dc2b4ce6cb4b9a4a08dbb575070cc6a34faafb8bee5db459d14dbd0e662841",
"0xeb4e2ad463db33ccf06801f4971da329a0c01e3ba819a6756178396935d6f041",
"0xbe89f5a55653b0a26284b8962f79898c0d97515a1cf0594c7637afe423fdb47f",
"0x7549d002055db34caef38421fd26c6460c755e4f841930bd114084ee04e32370"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

