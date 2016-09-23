<template>

    <div :class="['element', 'text', {'draggable': isDraggable}, {'editing': isEditable}]" :style="getStyles">
        <div class="input-field" :contenteditable="isEditable" @dblclick="dbClicked" @blur="clickedOut">
            {{ element.content }}
        </div>
    </div>

</template>

<script>

    export default {
        props: ['element'],
        data: function() {
            return {
                isDraggable: true,
                isEditable: false
            }
        },
        computed: {
            getStyles: function() {
                this.element.styles.transform = 'translate(' + this.element.pos.x + 'px, ' + this.element.pos.y + 'px)'; 
                this.element.styles.width = this.element.size.width + 'px'; 
                this.element.styles.height = this.element.size.height + 'px'; 
                return this.element.styles;
            }
        },
        methods: {
            dbClicked: function(e) {
                this.isDraggable = false;
                this.isEditable = true;
                this.element.interact.draggable(this.isDraggable);
            },
            clickedOut: function(e) {
                this.isDraggable = true;
                this.isEditable = false;
                this.element.interact.draggable(this.isDraggable);
            }
        }
    }

</script>
