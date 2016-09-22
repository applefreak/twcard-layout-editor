<template>

    <div class="element text draggable" style="background-color: #2299EE; color: white; font-size: 20px;">
        <div class="input-field" contenteditable="false">
            {{ msg }}
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                msg: 'hello!!'
            }
        }
    }

</script>
