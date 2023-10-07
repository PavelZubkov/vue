<script setup lang="ts">
import { ref } from 'vue';
import TaskAdd from '../task/TaskAdd.vue'
import TaskItem from '../task/TaskItem.vue'
import TaskList from '../task/TaskList.vue'

type Task = { name: string, completed: boolean }

const taskList = ref<Task[]>([])

function taskAdd(name: string) {
  taskList.value.push({ name, completed: false })
}

function taskCompleted(name: string, next?: boolean) {
  const task = taskList.value.find(obj => obj.name === name)
  if (!task) throw new Error('Task not found')

  if (next !== undefined) task.completed = next

  return next ?? task.completed ?? false
}
</script>

<template>
  <div class="app">
    <TaskAdd :taskAdd="taskAdd" />
    <TaskList>
      <TaskItem
        v-for="task in taskList"
        :key="task.name"
        :name="task.name"
        :completed="(next?: boolean) => taskCompleted(task.name, next)"
      />
      {{ taskList }}
    </TaskList>
  </div>
</template>

<style scoped></style>
