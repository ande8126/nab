import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fffacf',
            main: '#fffcef',
            dark: '#fff9c4',
        },
        secondary: {
            light: '#dd33fa',
            main: '#d500f9',
            dark: '#9500ae',
        }
    }
})

export default theme;