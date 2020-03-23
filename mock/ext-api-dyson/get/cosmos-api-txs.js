/// Cosmos API Mock
/// See:
/// curl "http://localhost:3000/cosmos-api/txs?transfer.recipient=cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq&page=1&limit=25"
/// curl "http://localhost:3000/cosmos-api/txs?message.sender=cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq&page=1&limit=25"
/// curl "https://cosmos-rpc.trustwalletapp.com/txs?transfer.recipient=cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq&page=1&limit=25"
/// curl "https://cosmos-rpc.trustwalletapp.com/txs?message.sender=cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq&page=1&limit=25"
/// curl http://localhost:8420/v1/cosmos/cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq
module.exports = {
    path: "/cosmos-api/txs?",
    template: function(params, query, body) {
        //console.log(query)
        if (query["transfer.recipient"] === 'cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq') {
            return JSON.parse(`
                {
                    "total_count": "1",
                    "count": "1",
                    "page_number": "1",
                    "page_total": "1",
                    "limit": "25",
                    "txs": [
                        {
                            "height": "26616",
                            "txhash": "3FEE8F10FBA5505DE2A8D3EF220D5CE900CA76B96208234BBF89B8075743A230",
                            "data": "0C0886C1BEF00510E7FFF6F801",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "success": true,
                                    "log": "",
                                    "events": [
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "sender",
                                                    "value": "cosmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd88lyufl"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "cosmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu34mf0eh"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "staking"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                                },
                                                {
                                                    "key": "action",
                                                    "value": "begin_unbonding"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "1147uatom"
                                                },
                                                {
                                                    "key": "recipient",
                                                    "value": "cosmos1tygms3xhhs3yv487phx3dw4a95jn7t7lpm470r"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "2203000uatom"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "unbond",
                                            "attributes": [
                                                {
                                                    "key": "validator",
                                                    "value": "cosmosvaloper1ptyzewnns2kn37ewtmv6ppsvhdnmeapvtfc9y5"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "2203000"
                                                },
                                                {
                                                    "key": "completion_time",
                                                    "value": "2020-01-03T20:13:58Z"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": "200000",
                            "gas_used": "127111",
                            "tx": {
                                "type": "cosmos-sdk/StdTx",
                                "value": {
                                    "msg": [
                                        {
                                            "type": "cosmos-sdk/MsgUndelegate",
                                            "value": {
                                                "delegator_address": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq",
                                                "validator_address": "cosmosvaloper1ptyzewnns2kn37ewtmv6ppsvhdnmeapvtfc9y5",
                                                "amount": {
                                                    "denom": "uatom",
                                                    "amount": "2203000"
                                                }
                                            }
                                        }
                                    ],
                                    "fee": {
                                        "amount": [
                                            {
                                                "denom": "uatom",
                                                "amount": "1000"
                                            }
                                        ],
                                        "gas": "200000"
                                    },
                                    "signatures": [
                                        {
                                            "pub_key": {
                                                "type": "tendermint/PubKeySecp256k1",
                                                "value": "A782zo6TI2H3DfHJ7X1WHOJz6p4fUYVRYhb/XqMTcVQt"
                                            },
                                            "signature": "fJkOgQX9FZz6UJJo48AA3qxc2v/vFrjxlMgq3iOhDmVUWjA2P6X+pPbPkSB1SHlBFlVbsNF/DDPB0pvP9LRPTg=="
                                        }
                                    ],
                                    "memo": ""
                                }
                            },
                            "timestamp": "2019-12-13T20:13:58Z",
                            "events": [
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "sender",
                                            "value": "cosmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd88lyufl"
                                        },
                                        {
                                            "key": "sender",
                                            "value": "cosmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu34mf0eh"
                                        },
                                        {
                                            "key": "module",
                                            "value": "staking"
                                        },
                                        {
                                            "key": "sender",
                                            "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                        },
                                        {
                                            "key": "action",
                                            "value": "begin_unbonding"
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "recipient",
                                            "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                        },
                                        {
                                            "key": "amount",
                                            "value": "1147uatom"
                                        },
                                        {
                                            "key": "recipient",
                                            "value": "cosmos1tygms3xhhs3yv487phx3dw4a95jn7t7lpm470r"
                                        },
                                        {
                                            "key": "amount",
                                            "value": "2203000uatom"
                                        }
                                    ]
                                },
                                {
                                    "type": "unbond",
                                    "attributes": [
                                        {
                                            "key": "validator",
                                            "value": "cosmosvaloper1ptyzewnns2kn37ewtmv6ppsvhdnmeapvtfc9y5"
                                        },
                                        {
                                            "key": "amount",
                                            "value": "2203000"
                                        },
                                        {
                                            "key": "completion_time",
                                            "value": "2020-01-03T20:13:58Z"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            `);
        }

        if (query["message.sender"] === 'cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq') {
            return JSON.parse(`
                {
                    "total_count": "2",
                    "count": "2",
                    "page_number": "1",
                    "page_total": "1",
                    "limit": "25",
                    "txs": [
                        {
                            "height": "26616",
                            "txhash": "3FEE8F10FBA5505DE2A8D3EF220D5CE900CA76B96208234BBF89B8075743A230",
                            "data": "0C0886C1BEF00510E7FFF6F801",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "success": true,
                                    "log": "",
                                    "events": [
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "sender",
                                                    "value": "cosmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd88lyufl"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "cosmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu34mf0eh"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "staking"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                                },
                                                {
                                                    "key": "action",
                                                    "value": "begin_unbonding"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "1147uatom"
                                                },
                                                {
                                                    "key": "recipient",
                                                    "value": "cosmos1tygms3xhhs3yv487phx3dw4a95jn7t7lpm470r"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "2203000uatom"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "unbond",
                                            "attributes": [
                                                {
                                                    "key": "validator",
                                                    "value": "cosmosvaloper1ptyzewnns2kn37ewtmv6ppsvhdnmeapvtfc9y5"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "2203000"
                                                },
                                                {
                                                    "key": "completion_time",
                                                    "value": "2020-01-03T20:13:58Z"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": "200000",
                            "gas_used": "127111",
                            "tx": {
                                "type": "cosmos-sdk/StdTx",
                                "value": {
                                    "msg": [
                                        {
                                            "type": "cosmos-sdk/MsgUndelegate",
                                            "value": {
                                                "delegator_address": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq",
                                                "validator_address": "cosmosvaloper1ptyzewnns2kn37ewtmv6ppsvhdnmeapvtfc9y5",
                                                "amount": {
                                                    "denom": "uatom",
                                                    "amount": "2203000"
                                                }
                                            }
                                        }
                                    ],
                                    "fee": {
                                        "amount": [
                                            {
                                                "denom": "uatom",
                                                "amount": "1000"
                                            }
                                        ],
                                        "gas": "200000"
                                    },
                                    "signatures": [
                                        {
                                            "pub_key": {
                                                "type": "tendermint/PubKeySecp256k1",
                                                "value": "A782zo6TI2H3DfHJ7X1WHOJz6p4fUYVRYhb/XqMTcVQt"
                                            },
                                            "signature": "fJkOgQX9FZz6UJJo48AA3qxc2v/vFrjxlMgq3iOhDmVUWjA2P6X+pPbPkSB1SHlBFlVbsNF/DDPB0pvP9LRPTg=="
                                        }
                                    ],
                                    "memo": ""
                                }
                            },
                            "timestamp": "2019-12-13T20:13:58Z",
                            "events": [
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "sender",
                                            "value": "cosmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd88lyufl"
                                        },
                                        {
                                            "key": "sender",
                                            "value": "cosmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu34mf0eh"
                                        },
                                        {
                                            "key": "module",
                                            "value": "staking"
                                        },
                                        {
                                            "key": "sender",
                                            "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                        },
                                        {
                                            "key": "action",
                                            "value": "begin_unbonding"
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "recipient",
                                            "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                        },
                                        {
                                            "key": "amount",
                                            "value": "1147uatom"
                                        },
                                        {
                                            "key": "recipient",
                                            "value": "cosmos1tygms3xhhs3yv487phx3dw4a95jn7t7lpm470r"
                                        },
                                        {
                                            "key": "amount",
                                            "value": "2203000uatom"
                                        }
                                    ]
                                },
                                {
                                    "type": "unbond",
                                    "attributes": [
                                        {
                                            "key": "validator",
                                            "value": "cosmosvaloper1ptyzewnns2kn37ewtmv6ppsvhdnmeapvtfc9y5"
                                        },
                                        {
                                            "key": "amount",
                                            "value": "2203000"
                                        },
                                        {
                                            "key": "completion_time",
                                            "value": "2020-01-03T20:13:58Z"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "height": "404179",
                            "txhash": "93E43518BAE4BC137605BBB7FD5D31FDAE6427ECE57EC299C43CE786FDAEBC63",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "success": true,
                                    "log": "",
                                    "events": [
                                        {
                                            "type": "delegate",
                                            "attributes": [
                                                {
                                                    "key": "validator",
                                                    "value": "cosmosvaloper17h2x3j7u44qkrq0sk8ul0r2qr440rwgjkfg0gh"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "2211271"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "module",
                                                    "value": "staking"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                                },
                                                {
                                                    "key": "action",
                                                    "value": "delegate"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": "200000",
                            "gas_used": "93720",
                            "tx": {
                                "type": "cosmos-sdk/StdTx",
                                "value": {
                                    "msg": [
                                        {
                                            "type": "cosmos-sdk/MsgDelegate",
                                            "value": {
                                                "delegator_address": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq",
                                                "validator_address": "cosmosvaloper17h2x3j7u44qkrq0sk8ul0r2qr440rwgjkfg0gh",
                                                "amount": {
                                                    "denom": "uatom",
                                                    "amount": "2211271"
                                                }
                                            }
                                        }
                                    ],
                                    "fee": {
                                        "amount": [
                                            {
                                                "denom": "uatom",
                                                "amount": "1000"
                                            }
                                        ],
                                        "gas": "200000"
                                    },
                                    "signatures": [
                                        {
                                            "pub_key": {
                                                "type": "tendermint/PubKeySecp256k1",
                                                "value": "A782zo6TI2H3DfHJ7X1WHOJz6p4fUYVRYhb/XqMTcVQt"
                                            },
                                            "signature": "X1/NzRdb+HUxE7N9gMk39XI8TyHFobLRQtsX4QxZZbYeKmEYOOZ7FyNSGqgmipCkpuysBeh6fNnbXmo3IFzFEQ=="
                                        }
                                    ],
                                    "memo": ""
                                }
                            },
                            "timestamp": "2020-01-13T15:23:12Z",
                            "events": [
                                {
                                    "type": "delegate",
                                    "attributes": [
                                        {
                                            "key": "validator",
                                            "value": "cosmosvaloper17h2x3j7u44qkrq0sk8ul0r2qr440rwgjkfg0gh"
                                        },
                                        {
                                            "key": "amount",
                                            "value": "2211271"
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "module",
                                            "value": "staking"
                                        },
                                        {
                                            "key": "sender",
                                            "value": "cosmos1dx27g0kzhwej0ekcf2k9hsktcxnmpl7fcehcvq"
                                        },
                                        {
                                            "key": "action",
                                            "value": "delegate"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            `);
        }

        // fallback
        var return4Codacy = {error: "Not implemented"};
        return return4Codacy;
    }
};

