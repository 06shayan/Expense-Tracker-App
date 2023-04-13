export function TransactionReducer(state, action) {
    switch (action.type) {
        case 'add-transaction':
            return [...state, action.payload]
        default:
            return state
    }
}