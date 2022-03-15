import { mount } from '@vue/test-utils'
import OrderList from '@/components/OrderList.vue'

describe('OrderList.vue', () => {
  it('renders props.totalPrice when passed', async () => {
    const wrapper = mount(OrderList)
    const text = wrapper.find('.tp')

    expect(text.text()).toContain('Total Price :')
    await wrapper.setProps({ totalPrice: 1234 })
    expect(text.text()).toContain('Total Price : 1234')
  })
})
