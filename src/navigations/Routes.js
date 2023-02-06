import dark from 'assets/images/desktop-basic-dark.png'
import light from 'assets/images/desktop-basic-light.png'
import BasicDark from 'screens/BasicDark'
import BasicLight from 'screens/BasicLight'


const routes = [
  {
    path: '/',
    component: <BasicLight />,
  },
  {
    path: '/basic-light',
    title: 'Basic Light',
    component: <BasicLight />,
    preview: light,
  },
  {
    path: '/basic-dark',
    title: 'Basic Dark',
    component: <BasicDark />,
    preview: dark,
  },
]

export { routes }
