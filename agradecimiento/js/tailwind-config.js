tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    yellow: '#EAB308', // Amarillo-500 exacto de la marca
                    borderDark: '#1F1F22', // Gris borde de tarjeta
                    textGray: '#8B8B93', // Gris cuerpo de texto
                    cardBg: '#080808' // Fondo tarjeta Bento
                },
                dark: {
                    void: '#030303' // Fondo de pantalla puro
                }
            },
            fontFamily: {
                body: ['Inter', 'sans-serif'],
                title: ['Inter', 'sans-serif'] // Usamos Inter Bold, NO Montserrat
            }
        }
    }
}