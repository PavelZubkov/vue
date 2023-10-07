<script setup lang="ts">
defineProps<{
  name: string
  completed: boolean
  toggle: () => void
}>()
</script>

<template>
  <div class="task-item" :data-completed="completed ? true : false">
    <span>{{ name }}</span>
    <input type="checkbox" class="task-item-check" :checked="completed" @click="toggle" />
  </div>
</template>

<style scoped>
.task-item {
  display: flex;
  flex: 1 0 row;
  gap: 8px;
  justify-content: space-between;
}

.task-item[data-completed="true"] {
  text-decoration: line-through;
}

.task-item-check {
  width: 24px;
  height: 24px;
}
</style>
