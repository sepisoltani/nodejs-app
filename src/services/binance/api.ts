import axios from 'axios'

export default class Binance {

    private apiKey: string;
    private apiSecret: string;
    private readonly base: string;
    private readonly wapi: string;
    private readonly sapi: string;
    private readonly baseTestNet: string;

    constructor(apiKey: string, apiSecrect: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecrect;
        this.base = "https://api.binance.com/api/";
        this.wapi = "https://api.binance.com/wapi/";
        this.sapi = "https://api.binance.com/sapi/";
        this.baseTestNet = "https://testnet.binance.vision/api/";
    }

    public async ping() {
        return axios.get(`${this.base}v3/ping`);
    }

    public async withdrawal(asset: string, address: string, amount: string, addressTag: string = null, network: string = null, transactionFeeFlag: boolean = false, name: string = null, withdrawOrderId: string = null) {
    }

    public async withdrawHistory(withdrawOrderId: string = null, coin: string = null, status: string = null, offset: number = 0, limit: number = 1000, startTime: string = null, endTime: string = null) {
    }

    public async getDepositAddress(symbol: string, network: string) {
    }

    public async depositHistory(coin: string = null, status: string = null, offset: number = 0, limit: number = 1000, startTime: string = null, endTime: string = null) {
    }

    public async getAccountInformation() {
    }

    public async newOrder(symbol: string, side: string, type: string, quantity: number, amount_type: string, order_id: string = null) {
    }

    public async allOrders(symbol: string, orderId: string = null, startTime: string = null, endTime: string = null, limit: number = 500) {
    }

    public queryOrder(symbol: string, orderId: string = null, origClientOrderId: string = null) {
    }

    public getConvertHistory(startTime: number, endTime: number, limit: number = 100) {
    }
}

