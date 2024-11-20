<template>
    <div>
        <h1>{{ h1Text }}</h1>
      <form data-test="form" @submit.prevent="crearTarea">
        <input data-test="nueva-tarea" v-model="nuevaTarea" />
      </form>
      <div>
        <li
          v-for="todo in todoList"
          :key="todo.id"
          data-test="tarea"
          :class="{ completed: todo.completed }"
        >
          {{ todo.description }}
          <input type="checkbox" v-model="todo.completed" data-test="checkbox" />
        </li>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TodoApp",
    props: {
        h1Text: String
    },  
    data() {
      return {
        nuevaTarea: "",
        todoList: [
          { id: 1, description: "Description toDo 1", completed: false },
        ],
      };
    },
    methods: {
      crearTarea() {
        this.todoList.push({
          id: this.todoList.length + 1,
          description: this.nuevaTarea,
          completed: false,
        });
        this.nuevaTarea = ""; // Limpiar el campo de tarea después de agregarla
      },
    },
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  