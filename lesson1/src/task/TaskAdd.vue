<script setup lang="ts">

    import { computed, ref } from 'vue';

    const props = defineProps<{ taskAdd: (name: string) => void }>()

    const name = ref('')
    const disabled = computed(() => name.value.length === 0)

    function add() {
        props.taskAdd(name.value)
        name.value = ''
    }

</script>

<template>
    <div class="task-add">
        <input type="text" v-model="name" />
        <button :disabled="disabled" @click="add">Add</button>
    </div>
</template>

<style scoped>
.task-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>
