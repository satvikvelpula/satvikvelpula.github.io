const contactForm = document.getElementById('contact__form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
e.preventDefault()

emailjs.sendForm('service_8byh1sa', 'template_i647yv9', '#contact__form', '3cpzKydim3CTa401u')
    .then(() => {
        contactMessage.textContent = 'Viesti lähetetty. '

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Viestiä ei voitu lähettää.'
    })
}

contactForm.addEventListener('submit', sendEmail)