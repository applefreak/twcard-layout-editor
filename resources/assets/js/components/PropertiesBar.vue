<template>
    <div class="property-bar">
        <label for="bg-color">BG Color: </label><input id="bg-color" type="text"></input>
        <label for="text-color">Text Color: </label><input id="text-color" type="text"></input>
        <button id="property-done">Done</button>
    </div>
</template>

<script>

    export default {
        ready: function() {
            console.log(this);
        }
    }

</script>
