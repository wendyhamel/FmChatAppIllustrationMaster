tailwind.config = {
    theme: {
        fontFamily : {
            'sans': ['Rubik', 'sans-serif'],
        },
        extend: {
            colors: {
                // Primary
                // text
                'violet-pale': '276, 100%, 81%', // sub-heading at the top of the app UI
                'violet-mod': '276, 55%, 52%', // chat on the left
                'violet-dark' : '271, 15%, 43%', // chat on the right
                'violet-dark-des': '271, 36%, 24%', // main heading and submit button background
                'violet-dark-gray': '270, 7%, 64%', // paragraph
                'grayish-blue': '206, 6%, 79%', // placeholder text

                'magenta-light': '293, 100%, 63%', // background colors and gradients
                'violet-light': '264, 100%, 61%', // background colors and gradients

                'White': '(0, 0%, 100%',
                'violet-light-gray': '(270, 20%, 96%', // app background
                'magenta-very-light': '(289, 100%, 72%', // radio button outline
            }
        }
    }
}