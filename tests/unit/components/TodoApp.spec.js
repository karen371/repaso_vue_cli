import { shallowMount, mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp";

describe("TodoApp.vue", () => {
  test("Se muestra la descripción de la tarea", () => {
    const wrapper = shallowMount(TodoApp);
    const todo = wrapper.get('[data-test="tarea"]');
    expect(todo.text()).toBe("Description toDo 1");
  });

  test("Deberá agregar una nueva tarea", async () => {
    const wrapper = shallowMount(TodoApp);
    expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(1);

    // Establecer el valor del input de tarea nueva
    await wrapper.get('[data-test="nueva-tarea"]').setValue('Nueva tarea');
    // Simular el envío del formulario
    await wrapper.get('[data-test="form"]').trigger('submit');
    
    // Verificar que el número de tareas aumentó a 2
    expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(2);
  });

  test("Se deberá marcar como tarea completada", async () => {
    const wrapper = shallowMount(TodoApp);
  
    // Simula el marcado del checkbox
    await wrapper.get('[data-test="checkbox"]').setValue(true);
  
    // Verifica si el li que contiene la tarea tiene la clase 'completed'
    const todo = wrapper.get('[data-test="tarea"]');
    expect(todo.classes()).toContain("completed");
  
    // También puedes verificar si el checkbox está marcado
    expect(wrapper.get('[data-test="checkbox"]').element.checked).toBe(true);
  });
  it('muestra el texto pasado por props', () => {
    const wrapper = mount(TodoApp, {
      props: {
        h1Text: 'Texto enviado desde el padre'
      }
    })
    
    // Verificamos si el texto dentro del h1 es el mismo que el valor de la prop
    expect(wrapper.find('h1').text()).toBe('Texto enviado desde el padre')
  });
});
/** Si prefieres una sintaxis más explícita y directa, usa test.
    Si prefieres una sintaxis más cercana al lenguaje natural para describir lo que hace tu código, 
    puedes usar it. */

/**mount: Usado cuando necesitas probar la interacción entre un componente y sus hijos, 
    o cuando el componente tiene lógica que depende de los subcomponentes.
    shallowMount: Usado cuando solo te interesa probar el comportamiento del componente 
    en aislamiento, sin importar los detalles de los hijos. */
