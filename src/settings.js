const settings = {
    sizeS: 12,
    sizeM: 14,
    sizeL: 18,
    sizeXL: 26,

    color: {
        accent: '#3A4F41',
        background: '#c9d3e1',
    },
    space: {
        item: 4,
        section: 5,
    },

    fontFamily: 'Times-Roman',
    fontItalic: 'Times-Italic',
    fontBold: 'Times-Bold',
    fontBoldItalic: 'Times-Bold-Italic',
}

export const globalStyles = {
    itemContent: {
        'marginLeft': 4,
    },
    itemSubtitle: {
        'fontFamily': settings.fontItalic,
        'fontSize': settings.sizeS,
    },
    icon: {
        height: 25, width: 25,
        paddingRight: 5,
    },
}

export default settings
