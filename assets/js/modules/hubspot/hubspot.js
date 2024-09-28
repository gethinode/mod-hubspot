// load the HubScript if at least one form is defined
if (document.querySelector('.form') !== null) {
    const script = document.createElement("script");
    script.setAttribute('src', 'https://js.hsforms.net/forms/embed/v2.js')
    script.async = false
    document.body.appendChild(script)

    // create and embed each form within the designated div element
    script.onload = () => {
        document.querySelectorAll('.form').forEach(form => {
            hbspt.forms.create({
                region: form.getAttribute('data-region'),
                portalId: form.getAttribute('data-portal-id'),
                formId: form.getAttribute('data-form-id'),
                target: `#${form.id}`
            })
        })
    }
}
