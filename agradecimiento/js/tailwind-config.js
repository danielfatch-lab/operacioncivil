tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    yellow: '#FACC15',
                    borderDark: '#1F1F22',
                    textGray: '#8B8B93',
                    textWhite: '#E4E4E7',
                    success: '#10B981', // Verde de confirmación
                    successDark: '#047857'
                },
                dark: {
                    void: '#000000',
                    surface: '#0A0A0C'
                }
            },
            fontFamily: {
                title: ['Montserrat', 'sans-serif'],
                body: ['Inter', 'sans-serif']
            }
        }
    }
}