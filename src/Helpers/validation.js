const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


// eslint-disable-next-line no-undef
export const validation = (props) => {
    let errors = {};


    if (!regexEmail.test(props.email)) {
        errors.email = "The user must be an email address.";
    }

    if (props.email.length > 35) {
        errors.email = "The username cannot have more than 35 characters.";
    }

    if (!props.email) {
        errors.email = "The username cannot be empty.";
    }

    if (props.password.length < 6 || props.password.length > 10) {
        errors.password = "The password must have a length between 6 and 10 characters."
    }

    return errors;
}