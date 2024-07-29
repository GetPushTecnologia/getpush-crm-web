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
  // {
  //   title: 'Dividentos',
  //   icon: '',
  //   children: [
  //     {
  //       title: 'Novo',
  //       icon: 'plus',
  //       link: '/pages/dividendos-modulo/novo-dividendo'
  //     },
  //     {
  //       title: 'Tipo Dividendos',
  //       icon: 'plus',
  //       link: '/pages/dividendos-modulo/novo-tipo-dividendo'
  //     }
  //   ]
  // },
  {
    title: 'Contas Pagas',
    icon: 'file-remove',
    children: [
      {
        title: 'Cadastrar',
        icon: 'plus',
        link: '/pages/contas-pagas/cadastrar-contas-pagas'
      },
      {
        title: 'Cadastrar Tipo Conta',
        icon: 'plus',
        link: '/pages/contas-pagas/cadastrar-tipo-contas-pagas'
      }
    ]
  },
  {
    title: 'Valor Recebido',
    icon: 'file-add',
    children: [
      {
        title: 'Cadastrar',
        icon: 'plus',
        link: '/pages/valor-recebido/cadastrar-valor-recebido'
      },
      {
        title: 'Cadastrar Tipo Valor',
        icon: 'plus',
        link: '/pages/valor-recebido/cadastrar-tipo-valor-recebido'
      }
    ]
  },
  // {
  //   title: 'Recebiveis',
  //   icon: '',
  //   children: [
  //     {
  //       title: 'Novo',
  //       icon: 'plus',
  //       link: '/pages/recebiveis-modulo/novo-recebiveis'
  //     },
  //     {
  //       title: 'Tipo Recebiveis',
  //       icon: 'plus',
  //       link: '/pages/recebiveis-modulo/novo-tipo-recebiveis'
  //     }
  //   ]
  // }
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
  //       link: '/pages/cliente/cliente-formulario'
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
  {
      title: 'UI Features',
      icon: 'keypad-outline',
      link: '/pages/ui-features',
      children: [
        {
          title: 'Grid',
          link: '/pages/ui-features/grid',
        },
        {
          title: 'Icons',
          link: '/pages/ui-features/icons',
        },
        {
          title: 'Typography',
          link: '/pages/ui-features/typography',
        },
        {
          title: 'Animated Searches',
          link: '/pages/ui-features/search-fields',
        },
      ],
    },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
