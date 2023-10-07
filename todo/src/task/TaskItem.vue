<script setup lang="ts">
const props = defineProps<{
  name: string
  completed: (next?: boolean) => boolean
}>()

console.log(props.completed, props.completed())
</script>

<template>
  <div class="task-item">
    <span>{{ name }}</span>
    <input type="checkbox" class="task-item-check" :checked="completed()" @click="completed(!completed())" />
  </div>
</template>

<style scoped>
.task-item {
  display: flex;
  flex: 1 0 row;
  gap: 8px;
}

.task-item-check {
  width: 24px;
  height: 24px;
}
</style>
