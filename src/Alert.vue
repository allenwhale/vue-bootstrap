<!--
<template>
    <transition name="fade">
        <div v-show="show" :class="classes" v-bind:style="{width:width}" role="alert">
            <button v-show="dismissable" type="button" class="close" @click="toggle">
                <span>&times;</span>
            </button>
            <slot></slot>
        </div>
    </transition>
</template>
-->
<script>
export default {
    render (h) {
        return (
            <transition name="fade">
                <div v-show={this.show} class={this.classes} style={{width: this.width}} role='alert'>
                    <button v-show={this.dismissable} type='button' class='close' on-click={this.toggle}>
                        <span>&times;</span>
                    </button>
                    {this.$slots.default}
                </div>
            </transition>
        )
    },
    props: {
        type: {
            type: String
        },
        dismissable: {
            type: Boolean,
            default: false
        },
        show: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 0
        },
        width: {
            type: String
        },
        placement: {
            type: String
        },
        toggle: {
            type: Function,
            default: () => {}
        }
    },
    computed: {
        classes () {
            return {
                'alert': true,
                'alert-success': (this.type === 'success'),
                'alert-warning': (this.type === 'warning'),
                'alert-info': (this.type === 'info'),
                'alert-danger': (this.type === 'danger'),
                'top': (this.placement === 'top'),
                'top-right': (this.placement === 'top-right')
            }
        }
    },
    watch: {
        show (val) {
            if (this._timeout) clearTimeout(this._timeout)
            if (val && Boolean(this.duration)) {
                this._timeout = setTimeout(this.toggle, this.duration)
            }
        }
    }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
.alert.top {
    position: fixed;
    top: 30px;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 1050;
}
.alert.top-right {
    position: fixed;
    top: 30px;
    right: 50px;
    z-index: 1050;
}
</style>
