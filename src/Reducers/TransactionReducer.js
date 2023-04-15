export function TransactionReducer(state, action) {
    switch (action.type) {
        case 'add-transaction':
            return [...state, action.payload]

        case 'delete-transaction':
            return state.filter(transaction => transaction.id !== action.payload.id)

        case 'reset':
            return []

        default:
            return state
    }
}