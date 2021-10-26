require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food filter release noble hobby hunt canoe army gate'; 
let testAccounts = [
"0x82c3c0789e253dd032f511eb475fa204ac2a1350eacd0b87a4511618c32ce4c1",
"0x41d88f166e6b7130ba5991e025a909daf277cd1007bce54df6f4b411c8c78b18",
"0x8313d91d18eae4c9140e71335d75637af417f0dd2f2ceb498c9744153a7f1dc6",
"0x96980c597523c13c070a12775b919682d6e3f2f1f67c483967bc34468b79fed9",
"0x8003bc6758c8c40f4ee3dc2b8e3de498bb518a448086ba94dec61407844efb8f",
"0xc9c599e31516872bca75779089b72fe4bbaff7ede03ee91de4dab5dcfe2929bd",
"0x57ab03bb5bf98ca567767899556f17e0457706a8fc6dae85d68cfc8eb12007d2",
"0x04acea3b217859d036708607c8dc9fe33111ccc663f7112a30a7bc285d75a865",
"0xad89b3481e94d82c171d29e667453afb3c452ed3921d3d91135c8c542834f297",
"0x59a63f8f80fb568250d4a62cd17daacc9174df05517ea9273566731b8562cece"
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

