import PropExample from "@/components/PropExample.vue"
import { mount } from "@vue/test-utils"

describe('PropExample.vue', () => {
  it('The component recieve and show title an content props', () => {
    const wrapper = mount(PropExample, {
      props: {
        title: "Hello world",
        content: "Lorem ipsum"
      }
    })
    if(expect(wrapper.find('h3').exists())) {
      expect(wrapper.find('h3').text()).toBe("Hello world")
    }
    if(expect(wrapper.find('p').exists())) {
      expect(wrapper.find('p').text()).toBe("Lorem ipsum")
    }
  })
  it('the component emits the counter value', async () => {
    const wrapper = mount(PropExample, {
      props: {
        title: "Hello world",
        content: "Lorem ipsum"
      }
    })
    await wrapper.find('button').trigger('click')
    // console.log(wrapper.emitted())
    expect(wrapper.emitted().clickMe[0][0]).toBe(1)
  })
})
