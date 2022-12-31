import { Font } from '@react-pdf/renderer'

const RegisterFont = (family, src) => {
    Font.register({family, fonts: [{src}]})
}

const SetUp = () => {
    // RegisterFont('Ubuntu', './assets/fonts/Ubuntu/Ubuntu-Regular.ttf')
    // RegisterFont('Ubuntu-Bold', './assets/fonts/Ubuntu/Ubuntu-Bold.ttf')
    // RegisterFont('Ubuntu-Italic', './assets/fonts/Ubuntu/Ubuntu-Italic.ttf')
    // RegisterFont('Ubuntu-Bold-Italic', './assets/fonts/Ubuntu/Ubuntu-Bold-Italic.ttf')

    // RegisterFont('Playfair', './assets/fonts/Playfair/PlayfairDisplay-Regular.ttf')
    // RegisterFont('Playfair-Bold', './assets/fonts/Playfair/PlayfairDisplay-Bold.ttf')
    // RegisterFont('Playfair-Italic', './assets/fonts/Playfair/PlayfairDisplay-Italic.ttf')
    // RegisterFont('Playfair-Bold-Italic', './assets/fonts/Playfair/PlayfairDisplay-BoldItalic.ttf')

    // RegisterFont('PT-Serif', './assets/fonts/PT-Serif/PTSerif-Regular.ttf')
    // RegisterFont('PT-Serif-Bold', './assets/fonts/PT-Serif/PTSerif-Bold.ttf')
    // RegisterFont('PT-Serif-Italic', './assets/fonts/PT-Serif/PTSerif-Italic.ttf')
    // RegisterFont('PT-Serif-Bold-Italic', './assets/fonts/PT-Serif/PTSerif-BoldItalic.ttf')
    
    // RegisterFont('Custom-Font', './assets/fonts/EB-Garamond/EBGaramond-Regular.ttf')
    // RegisterFont('Custom-Font-Italic', './assets/fonts/EB-Garamond/EBGaramond-Italic.ttf')
    // RegisterFont('Custom-Font-Bold', './assets/fonts/EB-Garamond/EBGaramond-Bold.ttf')
    // RegisterFont('Custom-Font-Bold-Italic', './assets/fonts/EB-Garamond/EBGaramond-Bold-Italic.ttf')
}

export default SetUp
