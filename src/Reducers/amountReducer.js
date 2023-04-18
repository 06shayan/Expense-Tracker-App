export function AmountReducer(state, action) {
    switch (action.type) {
        case 'amount-input':
            return action.payload
        default:
            return state
    }
}