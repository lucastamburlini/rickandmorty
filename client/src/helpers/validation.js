const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


// eslint-disable-next-line no-undef
export const validation = (props) => {
    let errors = {};


    if (!regexEmail.test(props.email)) {
        errors.email = "Invalid email";
    }

    if (props.email.length > 35) {
        errors.email = "No more than 35 characters";
    }

    if (!props.email) {
        errors.email = "Enter your email";
    }

    if (props.password.length < 6 || props.password.length > 10) {
        errors.password = "Password length: 6-10 characters"
    }

    return errors;
}