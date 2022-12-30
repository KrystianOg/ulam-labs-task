import { VariantType } from "notistack"

export class CoinError extends Error {
    // for noti-stack
    variant: VariantType
    constructor(message: string) {
        super(message)
        this.name = this.constructor.name
        this.variant = "error"
    }

    // TODO: add typeof enqueueSnackBar
    enqueueSnackBar = (notiStackEnqueue: any) => {
        notiStackEnqueue(this.message, {
            variant: this.variant,
            autoHideDuration: 3000
        })
    }
}

export default CoinError