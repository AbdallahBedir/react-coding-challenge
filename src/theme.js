import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette:{
        type:'light',
        primary:{            
            main:'#2c3e50'        
        },
        secondary:{
            main:'#efefef'
        },
        error:{            
            main:'#ed6161'
        },
        grey:{
            100:'#f9f9f9',
            400:'#aeaeae'
        }
    },
    shape:{
        borderRadius:2
    }
})

export default theme;