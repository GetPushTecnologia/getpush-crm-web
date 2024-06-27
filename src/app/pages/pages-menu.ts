import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
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
    title: 'Dividentos',
    icon: '',
    children: [
      {
        title: 'Novo',
        icon: 'plus',
        link: '/pages/dividendos-modulo/novo-dividendo'        
      },
      {
        title: 'Tipo Dividendos',
        icon: 'plus',
        link: '/pages/dividendos-modulo/novo-tipo-dividendo'
      }
    ]
  },
  {
    title: 'Recebiveis',
    icon: '',
    children: [
      {
        title: 'Novo',
        icon: 'plus',
        link: '/pages/recebiveis-modulo/novo-recebiveis'
      },
      {
        title: 'Tipo Recebiveis',
        icon: 'plus',
        link: '/pages/recebiveis-modulo/novo-tipo-recebiveis'
      }
    ]
  }
  // {
  //   title: 'Fazer venda',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/vendas/vendas-novo'
  // },
  // {
  //   title: 'Modulos',
  //   group: true,
  // },
  // {
  //   title: 'Cliente',
  //   icon: 'person',
  //   children: [
  //     {
  //       title: 'Novo Cliente',
  //       icon: 'plus',
  //       link: '/pages/cliente/cliente-novo'
  //     }
  //   ]
  // },
  // {
  //   title: 'Estoque',
  //   icon: 'car',
  //   children: [
  //     {
  //       title: 'Cadastrar',
  //       icon: 'plus',
  //       link: '/pages/estoque/estoque-cadastro'
  //     }
  //   ]
  // },  
  // {
  //   title: 'Forms',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //     title: 'Charts',
  //     icon: 'pie-chart-outline',
  //     children: [
  //       {
  //         title: 'Echarts',
  //         link: '/pages/charts/echarts',
  //       },
  //       {
  //         title: 'Charts.js',
  //         link: '/pages/charts/chartjs',
  //       },
  //       {
  //         title: 'D3',
  //         link: '/pages/charts/d3',
  //       },
  //     ],
  //   },
  //   {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  
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
