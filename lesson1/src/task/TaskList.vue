<script setup lang="ts">
</script>

<template>
    <div class="task-list">
        <slot></slot>
    </div>
</template>

<style scoped>
.task-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>
