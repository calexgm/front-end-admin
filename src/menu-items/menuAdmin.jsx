// assets
import {
  UserOutlined,
  SolutionOutlined ,
} from '@ant-design/icons';

// icons
const icons = {
  UserOutlined,
  SolutionOutlined,
};


const utilities = {
  id: 'admin',
  title: 'Administrador',
  type: 'group',
  children: [
    {
      id: 'util-usuarios',
      title: 'Usuarios',
      type: 'item',
      url: '/users',
      icon: icons.UserOutlined
    },
    {
      id: 'admin-clientes',
      title: 'Clientes',
      type: 'item',
      url: '/clients',
      icon: icons.SolutionOutlined
    },
    
  ]
};

export default utilities;
