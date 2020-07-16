import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: blue,
    type: 'light',
  },
})

export default theme
