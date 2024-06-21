import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  // {
  //   title: 'Dashboard',
  //   icon: 'home-outline',
  //   link: ''
  // },
  {
    title: 'Fluxo Caixa Painel',
    icon: 'pie-chart',
    link: '/pages/fluxo-caixa/fluxo-caixa-painel'
  },
  {
    title: 'Fazer venda',
    icon: 'shopping-cart-outline',
    link: '/pages/vendas/vendas-novo'
  },
  {
    title: 'Modulos',
    group: true,
  },
  {
    title: 'Cliente',
    icon: 'person',
    children: [
      {
        title: 'Novo Cliente',
        icon: 'plus',
        link: '/pages/cliente/cliente-novo'
      }
    ]
  },
  {
    title: 'Estoque',
    icon: 'car',
    children: [
      {
        title: 'Cadastrar',
        icon: 'plus',
        link: '/pages/estoque/estoque-cadastro'
      }
    ]
  },  
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
      title: 'Charts',
      icon: 'pie-chart-outline',
      children: [
        {
          title: 'Echarts',
          link: '/pages/charts/echarts',
        },
        {
          title: 'Charts.js',
          link: '/pages/charts/chartjs',
        },
        {
          title: 'D3',
          link: '/pages/charts/d3',
        },
      ],
    },
  
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
