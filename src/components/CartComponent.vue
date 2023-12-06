<template>
    <div class="cart">
        <div class="header">
            <span>Main Course</span>
            <button>&times;</button>
        </div>
        <div class="foods">

        </div>
    </div>
    <div class="overlay"></div>
</template>

<script lang="ts">

</script>

<style scoped>
.cart {
    width: 500px;
    background-color: blue;
    position: fixed;
    right: 0;
    z-index: 10;
}

.overlay {}

.hidden {
    display: none;
}
</style>