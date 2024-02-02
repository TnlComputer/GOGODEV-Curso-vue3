// import { mount, shallowMount } from "@vue/test-utils"
// import { App } from "@/App.vue"
// import HelloWorld from '@/components/HelloWorld.vue'

import  App  from '@/App.vue';
import { mount } from "@vue/test-utils"

describe('App.vue', () => {
  // actions
  //cada paso lo llamamos con if()
  it('the component render the initial state', () => {
    // TODO: aca va el testing en si
    // expect(X).to[matcher](value)
    // expect(counter).toBe(0)
    // const wrapper = mount(App)
    // wrapper.findComponent(HelloWorld)
    // wrapper.findComponent({name: 'HelloWorld'})
    // // wrapper.findComponent('#component_id') si es un id
    // wrapper.findComponent('.component_clas') si es una clase
    // const wrapper2 = shallowMount('MyComponent', {   })
    // expect(wrapper.find('h3').exists()).toBe(0)

    const wrapper = mount(App)
    if(expect(wrapper.find('h3').exists())) {
      expect(wrapper.find('h3').text()).toBe('0')
    }
    if(expect(wrapper.find('button').exists())) {
      expect(wrapper.find('button').text()).toBe('Increment')
    }
  })
  // assertions
  it('the increment button andd ones to counter', async () => {
    // TODO: implement lo que necesitamos que testee
    const wrapper = mount(App)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('h3').text()).toBe('1')

  })

})