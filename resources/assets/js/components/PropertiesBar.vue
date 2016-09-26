<template>
    <div class="property-bar">
        <label for="bg-color">BG Color: </label>
        <input id="bg-color" type="text" v-spectrum="current.bg_color" :color="current.bg_color"></input>

        <label for="text-color">Text Color: </label>
        <input id="text-color" type="text" v-spectrum="current.color" :color="current.color"></input>

        <button id="property-done">Done</button>
    </div>
</template>

<script>
    require('spectrum-colorpicker')

    export default {
        props: ['current'],
        data: function () {
            return {
                // bg_color: this.$parent.selected.bg_color
            }
        },
        directives: {
            'spectrum': {
                twoWay: true,
                params: ['color'],
                bind: function() {
                    var self = this
                    $(this.el).spectrum({
                        color: self.params.color,
                        move: function(color) {
                            self.set(color.toHexString())
                        }
                    })
                }
            }
        }

    }

</script>
