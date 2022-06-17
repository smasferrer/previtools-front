export default [
  {
    name: 'Inicio',
    icon: 'fa-solid fa-house-user',
    path: '/'
  },
  {
    name: 'Generador de usuarios',
    icon: 'fa-solid fa-users',
    path: '/recaudacion/user-generator'
  },
  {
    name: 'Inspector de Tags',
    icon: 'fa-solid fa-magnifying-glass',
    path: '/recaudacion/database-tag'
  },
  {
    name: 'Generador de cupones',
    icon: 'fa-solid fa-house-user',
    path: '/recaudacion/coupon-generator'
  },
  {
    name: 'Nóminas electronicas',
    icon: 'fa-solid fa-file-excel',
    children: [{
      name: 'Subsidios',
      path: '/recaudacion/nominas-electronicas/subsidios'
    },
    {
      name: 'Pensiones',
      path: '/recaudacion/nominas-electronicas/pensiones'
    },
    {
      name: 'Pensiones mutualidad',
      path: '/recaudacion/nominas-electronicas/pensiones-mutualidad'
    }]
  },
]