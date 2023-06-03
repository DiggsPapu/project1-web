import Dropdown from './dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {},
}

export const BaseCase = {
  args: {
    title: 'hola',
    subtitle: 'EOOO',
    values: ['Hace', 'rato', 'me', 'pico', 'un', 'mosquito'],
    extra: 'Ohhh africa',
  },
}
