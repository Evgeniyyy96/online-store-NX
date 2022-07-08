

export const state = () => ({
    vshoppingCart: []
})


export const getters = {

}


export const mutations = {
    ADD_TO_CART (state, payload) {
        state.vshoppingCart.push(payload)
    }

}


export const actions = {

}
