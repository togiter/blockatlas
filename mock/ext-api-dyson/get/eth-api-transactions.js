/// Ethereum API Mock
/// See:
/// curl "http://localhost:3000/eth-api/transactions?address=0x0875BCab22dE3d02402bc38aEe4104e1239374a7"
/// curl "https://trust-wallet.herokuapp.com/transactions?address=0x0875BCab22dE3d02402bc38aEe4104e1239374a7"
/// curl http://localhost:8420/v1/ethereum/0x0875BCab22dE3d02402bc38aEe4104e1239374a7

module.exports = {
    path: '/eth-api/transactions',
    template: function(params, query, body) {
        //console.log(query)
        if (query.address === '0x0875BCab22dE3d02402bc38aEe4104e1239374a7') {
            return JSON.parse(`{
                "docs": [
                    {
                        "operations": [],
                        "contract": null,
                        "_id": "0x2a9fd94735e273526a2cde57c6a19b9d488e0c9a960565c3e19be5e12d4b4b47",
                        "blockNumber": 9551915,
                        "time": 1582624428,
                        "nonce": 227,
                        "from": "0x0875BCab22dE3d02402bc38aEe4104e1239374a7",
                        "to": "0x1717f94202c126ef71d6C562de253Fe95eEbDD5f",
                        "value": "17635730000000000",
                        "gas": "21000",
                        "gasPrice": "4320000000",
                        "gasUsed": "21000",
                        "input": "0x",
                        "error": "",
                        "id": "0x2a9fd94735e273526a2cde57c6a19b9d488e0c9a960565c3e19be5e12d4b4b47",
                        "timeStamp": "1582624428"
                    },
                    {
                        "operations": [
                            {
                                "transactionId": "0xb669b69afee75c6ef073a603600041d3708d54da8d43cab7b35ee66baa7510d3-0",
                                "contract": {
                                    "address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
                                    "symbol": "BAT",
                                    "decimals": 18,
                                    "totalSupply": "1500000000000000000000000000",
                                    "name": "Basic Attention Token",
                                    "updatedAt": "2020-03-23T06:01:25.975Z"
                                },
                                "from": "0xeCe114137b2e9Dbf29712BDC39639EB0B72B41b8",
                                "to": "0x0875BCab22dE3d02402bc38aEe4104e1239374a7",
                                "type": "token_transfer",
                                "value": "400000000000000000",
                                "id": null
                            }
                        ],
                        "contract": null,
                        "_id": "0xb669b69afee75c6ef073a603600041d3708d54da8d43cab7b35ee66baa7510d3",
                        "blockNumber": 9519169,
                        "time": 1582189159,
                        "nonce": 16,
                        "from": "0xeCe114137b2e9Dbf29712BDC39639EB0B72B41b8",
                        "to": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
                        "value": "0",
                        "gas": "51839",
                        "gasPrice": "11500000000",
                        "gasUsed": "37028",
                        "input": "0xa9059cbb0000000000000000000000000875bcab22de3d02402bc38aee4104e1239374a7000000000000000000000000000000000000000000000000058d15e176280000",
                        "error": "",
                        "id": "0xb669b69afee75c6ef073a603600041d3708d54da8d43cab7b35ee66baa7510d3",
                        "timeStamp": "1582189159"
                    }
                ],
                "total": 2
            }`);
        }
        // fallback
        var return4Codacy = {error: "Not implemented"};
        return return4Codacy;
    }
};
