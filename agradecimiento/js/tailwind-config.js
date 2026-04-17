tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    yellow: '#EAB308', // Amarillo-500 exacto
                    borderDark: '#1F1F22',
                    textGray: '#8B8B93',
                    cardBg: '#080808',
                    cardBgAlt: '#0A0A0A'
                },
                dark: {
                    void: '#030303'
                }
            },
            fontFamily: {
                body: ['Inter', 'sans-serif'],
                title: ['Inter', 'sans-serif'] // Eliminado Montserrat por Inter Bold
            }
        }
    }
}