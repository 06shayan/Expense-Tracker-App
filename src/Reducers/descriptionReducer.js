export function DescriptionReducer(state, action) {
    switch (action.type) {
        case 'description-input':
            return action.payload
        default:
            return state
    }
}