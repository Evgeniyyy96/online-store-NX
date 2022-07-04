

export const state = () => ({
    shoppingCart: []
})


export const getters = {

}


export const mutations = {
    ADD_TO_CART (state, payload) {
        state.shoppingCart.push(payload)
    }

}


export const actions = {

}
