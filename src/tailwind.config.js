tailwind.config = {
    theme: {
        fontFamily : {
            'sans': ['Rubik', 'sans-serif'],
        },
        extend: {
            colors: {
                'violet-pale': 'hsl(276, 100%, 81%)', // sub-heading at the top of the app UI
                'violet-mod': 'hsl(276, 55%, 52%)', // chat on the left
                'violet-dark' : 'hsl(271, 15%, 43%)', // chat on the right
                'violet-dark-des': 'hsl(271, 36%, 24%)', // main heading and submit button background
                'violet-dark-gray': 'hsl(270, 7%, 64%)', // paragraph
                'grayish-blue': 'hsl(206, 6%, 79%)', // placeholder text

                'magenta-light': 'hsl(293, 100%, 63%)', // background colors and gradients
                'violet-light': 'hsl(264, 100%, 61%)', // background colors and gradients

                'White': 'hsl(0, 0%, 100%)',
                'violet-light-gray': 'hsl(270, 20%, 96%)', // app background
                'magenta-very-light': 'hsl(289, 100%, 72%)', // radio button outline
            }
        }
    }
}