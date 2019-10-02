export const component = {
    props: {
        'wrap':{
            type: [String, Boolean],
            validator: (value) => [true, false, 'reverse'].includes(value)
        },
        'shadow': {
            type: [Number, String],
        }
    },
    computed: {
        flexWrapStyle() {
            let wrap = this.$props.wrap || this.$attrs["flex-wrap"]
            let value = wrap
            if (wrap == true) {
                value = 'wrap'
            } else if (wrap == 'reverse') {
                value = 'wrap-reverse'
            } else if (wrap == false) {
                value = 'nowrap'
            }
            return (value != null) && { 'flex-wrap': value }
        },
        shadowStyle() {
            let shadowArg = this.$props.shadow || this.$attrs["box-shadow"]
            return shadowArg && easyShadow(shadowArg)
        }
    }
}