import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import paths from '../../constants/paths'
const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagOutlinedIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ShoppingCartOutlinedIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddShoppingCartOutlinedIcon
  }
]

export default listLinks
