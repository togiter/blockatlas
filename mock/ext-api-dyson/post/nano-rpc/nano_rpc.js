/// Nano RPC Mock
/// curl -H 'Content-Type: application/json' -d ' {"action":"account_history","account":"nano_36e7qfxrpixge3xxujtpc87c77mn9ubu3bhywfjkr1trnubtd4qswwydhn9z","count":"25"} ' http://localhost:3000/nano-rpc
/// curl -H 'Content-Type: application/json' -d ' {"action":"account_history","account":"nano_36e7qfxrpixge3xxujtpc87c77mn9ubu3bhywfjkr1trnubtd4qswwydhn9z","count":"25"} ' https://nano-rpc.trustwalletapp.com
/// curl "http://localhost:8420/v1/nano/nano_36e7qfxrpixge3xxujtpc87c77mn9ubu3bhywfjkr1trnubtd4qswwydhn9z"

module.exports = {
    path: '/nano-rpc',
    template: function(params, query, body) {
        //console.log("curl -H 'Content-Type: application/json' -d '", JSON.stringify(body), "' https://nano-rpc.trustwalletapp.com");
        if (body.action === 'account_history') {
            //console.log('body.account', body.account);
            if (body.account === 'nano_36e7qfxrpixge3xxujtpc87c77mn9ubu3bhywfjkr1trnubtd4qswwydhn9z') {
                return JSON.parse(`{
                    "account": "nano_36e7qfxrpixge3xxujtpc87c77mn9ubu3bhywfjkr1trnubtd4qswwydhn9z",
                    "history": [
                        {
                            "type": "send",
                            "account": "nano_1trqphog5noig7z888asnjejcie8z1iopxyepcjdo1atps8whxiuwd51ehbw",
                            "amount": "1083000821328155744662798729216",
                            "local_timestamp": "1576911470",
                            "height": "8",
                            "hash": "05A23A254272028F349BB7E74115A5101B2048786A5437D1EBBE8807CEFF1E82"
                        },
                        {
                            "type": "receive",
                            "account": "nano_1trqphog5noig7z888asnjejcie8z1iopxyepcjdo1atps8whxiuwd51ehbw",
                            "amount": "1047300821328155744662798729216",
                            "local_timestamp": "1576911457",
                            "height": "7",
                            "hash": "13B8146F059C4D5695DCBCEEC750EAEDDDD8F436A6FAD569A107F2FAC0F899D5"
                        },
                        {
                            "type": "receive",
                            "account": "nano_1trqphog5noig7z888asnjejcie8z1iopxyepcjdo1atps8whxiuwd51ehbw",
                            "amount": "34700000000000000000000000000",
                            "local_timestamp": "1576911446",
                            "height": "6",
                            "hash": "8A2A5840C9286B35D998F5AD535851750C1AFE7B0C7D3AA61E06A1628EDD0E94"
                        },
                        {
                            "type": "receive",
                            "account": "nano_1trqphog5noig7z888asnjejcie8z1iopxyepcjdo1atps8whxiuwd51ehbw",
                            "amount": "1000000000000000000000000000",
                            "local_timestamp": "1575913533",
                            "height": "5",
                            "hash": "6816B5AC0594ED768CEC45F5DE25CBF0420300800B6C3C55E6749102F8B09C81"
                        },
                        {
                            "type": "send",
                            "account": "nano_1trqphog5noig7z888asnjejcie8z1iopxyepcjdo1atps8whxiuwd51ehbw",
                            "amount": "1083000821328155744662798729216",
                            "local_timestamp": "1575498786",
                            "height": "4",
                            "hash": "D9F97A2AB82EDFAA7A23FFA3423B286A8DD361B5B9303C5E0262EB684162DFD6"
                        },
                        {
                            "type": "receive",
                            "account": "nano_1trqphog5noig7z888asnjejcie8z1iopxyepcjdo1atps8whxiuwd51ehbw",
                            "amount": "713600821328155744662798729216",
                            "local_timestamp": "1575498271",
                            "height": "3",
                            "hash": "69F4616925EC95DC15D97037BD99E2E782C2D2A557D5CE11E7FBB4BB6FF617F5"
                        },
                        {
                            "type": "receive",
                            "account": "nano_1trqphog5noig7z888asnjejcie8z1iopxyepcjdo1atps8whxiuwd51ehbw",
                            "amount": "234700000000000000000000000000",
                            "local_timestamp": "1575498125",
                            "height": "2",
                            "hash": "6CE398F84A6B3F71E41E843C34917DAC408990C8468EFBC36CFC04954B113A43"
                        },
                        {
                            "type": "receive",
                            "account": "nano_1trqphog5noig7z888asnjejcie8z1iopxyepcjdo1atps8whxiuwd51ehbw",
                            "amount": "134700000000000000000000000000",
                            "local_timestamp": "1575498065",
                            "height": "1",
                            "hash": "586BB82BADA98D6F8E4639DA6884C6562141AB983D885780FA41F31F7A04EC18"
                        }
                    ]
                }`);
            }
            return {error: 'Bad account number'};
        }
        return {error: 'Invalid request'};
    }
};
