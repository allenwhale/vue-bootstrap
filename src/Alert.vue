<template>
<div v-show="show" :class="classes" transition="fade" v-bind:style="{width:width}" role="alert">
    <button v-show="dismissable" type="button" class="close" @click="toggle">
        <span>&times;</span>
    </button>
    <slot></slot>
</div>
</template>

<script>
export default {
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
            type: Number
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
.fade-transition {
    transition: opacity .3s ease;
}
.fade-enter,
.fade-leave {
    height: 0;
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
