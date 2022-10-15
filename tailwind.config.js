/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            backgroundImage: {
                'entrada-trilha': "url('assets/entrada-trilha.jpg')"
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
