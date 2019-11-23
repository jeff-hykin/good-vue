let globalData
export let setGlobalData = (Vue, data) => {
    globalData = data
    // connect the data to every child component
    Vue.mixin({
        data: ()=>({
            $global: globalData
        })
    })
}