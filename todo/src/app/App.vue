<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import TaskAdd from '../task/TaskAdd.vue'
import TaskList from '../task/TaskList.vue'
import { TodoApp } from './app';

const app = reactive(new TodoApp)

const filterName = ref('')
const tasksFiltered = computed(() => app.tasksFilter(obj => obj.name.includes(filterName.value)))

</script>

<template>
  <div class="app">
    <TaskAdd :taskAdd="(name: string) => app.taskAdd(name)" />
    <TaskList :tasks="tasksFiltered" />
    <div class="task-filter">
      <b>Filter by name</b>
      <input type="text" v-model="filterName" />
    </div>
  </div>
</template>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .task-filter {
      display: flex;
      flex-direction: column;
      border: 1px dashed blue;
      padding: 8px;
  }
</style>
