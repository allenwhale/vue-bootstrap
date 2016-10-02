<script>
export default {
    render (h) {
        return (
            <div class={['panel', this.panelType]}>
                { this.$slots.header ? <div class='panel-heading'>{this.$slots.header}</div> : ''}
                { this.$slots.default ? <div class='panel-body'>{this.$slots.default}</div> : ''}
                { this.$slots.footer ? <div class='panel-heading'>{this.$slots.footer}</div> : ''}
            </div>
        )
    },
    props: {
        type: {
            type: String,
            default: 'default'
        }
    },
    computed: {
        panelType () {
            return 'panel-' + this.type
        }
    }
}
</script>

<style lang="sass">
</style>
