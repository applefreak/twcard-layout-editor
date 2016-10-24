<template>
    <div :class="['element', 'text', {'draggable': isDraggable}, {'editing': isEditable}]" :style="getStyles">
        <div class="input-field" v-medium='element.content' mode="partial" :contenteditable="isEditable" @dblclick="dbClicked" @blur="clickedOut"></div>
    </div>
</template>

<script>

    export default {
        props: ['element', 'index'],
        data: function() {
            return {
                isDraggable: true,
                isEditable: false
            }
        },
        computed: {
            getStyles: function() {
                return {
                    transform: 'translate(' + this.element.pos.x + 'px, ' + this.element.pos.y + 'px)',
                    width: this.element.size.width + 'px',
                    height: this.element.size.height + 'px',
                    ['background-color']: this.element['bg_color'],
                    color: this.element.color,
                    ['font-size']: this.element['font-size'] + 'px'
                }
            }
        },
        methods: {
            dbClicked: function(e) {
                this.isDraggable = false;
                this.isEditable = true;
                this.element.interact.draggable(this.isDraggable);
                this.$dispatch('item_selected', this.index);
            },
            clickedOut: function(e) {
                this.isDraggable = true;
                this.isEditable = false;
                this.element.interact.draggable(this.isDraggable);
                this.$dispatch('item_selected', false);
            }
        },
        directives: {
            medium: require('../mediumDirective')
        }
    }

</script>
