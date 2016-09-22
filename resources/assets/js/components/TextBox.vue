<template>

    <div class="element text draggable" :style="getStyles">
        <div class="input-field" contenteditable="false">
            {{ element.content }}
        </div>
    </div>

</template>

<script>

    export default {
        props: ['element'],
        computed: {
            getStyles: function() {
                this.element.styles.transform = 'translate(' + this.element.pos.x + 'px, ' + this.element.pos.y + 'px)'; 
                this.element.styles.width = this.element.size.width + 'px'; 
                this.element.styles.height = this.element.size.height + 'px'; 
                return this.element.styles;
            }
        }
    }

</script>
