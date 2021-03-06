// +build integration

package docker_test

import (
	"context"
	"encoding/json"
	"github.com/streadway/amqp"
	"github.com/stretchr/testify/assert"
	"github.com/trustwallet/blockatlas/coin"
	"github.com/trustwallet/blockatlas/mq"
	"github.com/trustwallet/blockatlas/pkg/blockatlas"
	"github.com/trustwallet/blockatlas/services/observer/notifier"
	"github.com/trustwallet/blockatlas/services/observer/parser"
	"github.com/trustwallet/blockatlas/tests/docker_test/setup"
	"go.uber.org/atomic"
	"testing"
	"time"
)

var counter atomic.Int32
var counterBlock atomic.Int32

func TestFullFlow(t *testing.T) {
	err := setup.Cache.AddSubscriptions([]blockatlas.Subscription{{Coin: 60, Address: "testAddress", GUID: "guid_test"}})
	assert.Nil(t, err)

	ctx, cancel := context.WithCancel(context.Background())

	stopChan := make(chan struct{}, 1)

	params := setupParserFull(stopChan)
	params.Ctx = ctx
	params.Queue = mq.RawTransactions

	go parser.RunParser(params)
	time.Sleep(time.Second * 2)

	go mq.RawTransactions.RunConsumerForChannelWithCancel(notifier.RunNotifier, rawTransactionsChannel, setup.Cache, ctx)
	time.Sleep(time.Second * 5)

	for i := 0; i < 11; i++ {
		x := transactionsChannel.GetMessage()
		ConsumerToTestTransactionsFull(x, t, cancel, i)
	}
	<-stopChan
}

func getMockedBlockAPIFull() blockatlas.BlockAPI {
	p := PlatformFullFlow{CoinIndex: 60}
	return &p
}

type PlatformFullFlow struct {
	CoinIndex uint
}

func (p *PlatformFullFlow) CurrentBlockNumber() (int64, error) {
	i := counterBlock.Load()
	counterBlock.Add(1)
	return int64(i), nil
}

func (p *PlatformFullFlow) Coin() coin.Coin {
	return coin.Coins[p.CoinIndex]
}

func (p *PlatformFullFlow) GetBlockByNumber(num int64) (*blockatlas.Block, error) {
	if num < 100 {
		return &blockatlas.Block{
			Number: num,
			ID:     "",
			Txs: []blockatlas.Tx{
				{
					ID:     "95CF63FAA27579A9B6AF84EF8B2DFEAC29627479E9C98E7F5AE4535E213FA4C9",
					Coin:   coin.ETH,
					From:   "tbnb1ttyn4csghfgyxreu7lmdu3lcplhqhxtzced45a",
					To:     "testAddress",
					Fee:    "125000",
					Date:   1555117625,
					Block:  7928667,
					Status: blockatlas.StatusCompleted,
					Memo:   "test",
					Meta: blockatlas.NativeTokenTransfer{
						TokenID:  "YLC-D8B",
						Symbol:   "YLC",
						Value:    "210572645",
						Decimals: 8,
						From:     "tbnb1ttyn4csghfgyxreu7lmdu3lcplhqhxtzced45a",
						To:       "testAddress",
					},
				},
			},
		}, nil
	}
	return &blockatlas.Block{}, nil
}

func ConsumerToTestTransactionsFull(delivery amqp.Delivery, t *testing.T, cancel context.CancelFunc, counter int) {
	var event notifier.DispatchEvent
	if err := json.Unmarshal(delivery.Body, &event); err != nil {
		assert.Nil(t, err)
		return
	}
	err := delivery.Ack(false)
	if err != nil {
		assert.Nil(t, err)
	}
	memo := blockatlas.NativeTokenTransfer{
		TokenID:  "YLC-D8B",
		Symbol:   "YLC",
		Value:    "210572645",
		Decimals: 8,
		From:     "tbnb1ttyn4csghfgyxreu7lmdu3lcplhqhxtzced45a",
		To:       "testAddress",
	}

	assert.Equal(t, notifier.DispatchEvent{
		Action: blockatlas.TxNativeTokenTransfer,
		Result: &blockatlas.Tx{
			Type:      blockatlas.TxNativeTokenTransfer,
			Direction: "incoming",
			ID:        "95CF63FAA27579A9B6AF84EF8B2DFEAC29627479E9C98E7F5AE4535E213FA4C9",
			Coin:      coin.ETH,
			From:      "tbnb1ttyn4csghfgyxreu7lmdu3lcplhqhxtzced45a",
			To:        "testAddress",
			Fee:       "125000",
			Date:      1555117625,
			Block:     7928667,
			Status:    blockatlas.StatusCompleted,
			Memo:      "test",
			Meta:      &memo,
		},
		GUID: "guid_test",
	}, event)

	if counter == 10 {
		cancel()
	}
}

func setupParserFull(stopChan chan<- struct{}) parser.Params {
	minTime := time.Second
	maxTime := time.Second * 2
	maxBatchBlocksAmount := 1

	pollInterval := notifier.GetInterval(0, minTime, maxTime)

	backlogCount := 1

	return parser.Params{
		Api:                   getMockedBlockAPIFull(),
		Storage:               setup.Cache,
		ParsingBlocksInterval: pollInterval,
		BacklogCount:          backlogCount,
		MaxBacklogBlocks:      int64(maxBatchBlocksAmount),
		TxBatchLimit:          100,
		StopChannel:           stopChan,
	}
}
