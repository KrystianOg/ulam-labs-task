import CoinError from './CoinError'

export class SearchCoinsFullError extends CoinError {

    constructor() {
        super('Max number of coins reached')
        this.name = this.constructor.name
        this.variant = "warning"
    }
}

export default SearchCoinsFullError