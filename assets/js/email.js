const contactForm = document.getElementById('contact__form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
e.preventDefault()

emailjs.sendForm('service_8byh1sa', 'template_i647yv9', '#contact__form', '3cpzKydim3CTa401u')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully.'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message could not be sent. '
    })
}

contactForm.addEventListener('submit', sendEmail)