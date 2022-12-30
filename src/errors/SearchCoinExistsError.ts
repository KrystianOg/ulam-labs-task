import CoinError from './CoinError'

export class SearchCoinExistsError extends CoinError {
    constructor() {
        super('Coin already added')
        this.name = this.constructor.name
        this.variant = "info"
    }
}

export default SearchCoinExistsError