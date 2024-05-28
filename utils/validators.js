module.exports = {
    validateInput: (input) => {
        const errors = {};

        // Validación de email
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        if (!input.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(input.email)) {
            errors.email = "Invalid email address";
        }

        // Validación de nombre
        const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*\s[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;
        if (!input.name) {
            errors.name = "Name is required";
        } else if (!nameRegex.test(input.name)) {
            errors.name = "Invalid name";
        }

        // Validación de código
        if (!input.code || input.code === "") {
            errors.code = "Code is required";
        }

        if (!input.phone || input.phone === "") {
            errors.phone = "Phone is required";
        }

        if (!input.terms) {
            errors.terms = "You must accept the terms and conditions";
        }

        return errors;
    }
};
