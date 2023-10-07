<script setup lang="ts">
import TaskItem from './TaskItem.vue';
import type { TodoTask } from './task';

defineProps<{
    tasks: TodoTask[]
}>()
</script>

<template>
    <div class="task-list">
        <template
            v-for="task in tasks"
            :key="task.id"
        >
            <TaskItem
                :name="task.name"
                :completed="task.completed"
                :toggle="task.toggle"
            />
        </template>
    </div>
</template>

<style scoped>
.task-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>
