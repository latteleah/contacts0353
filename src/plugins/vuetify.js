import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    ssr: true,
    theme: {
        themes: {
            light: {
                primary: '#fff0f9', // your primary color
                secondary: '#6c8994', // your secondary color
                accent: '#82c0bd',
                error: '#b71c1c',
            },
            dark:{
                primary: '#7471a1', // your primary color
                secondary: '#7a939f', // your secondary color
                accent: '#7184e8',
                error: '#b71c1c',
            }
        },
    },
})
export default vuetify