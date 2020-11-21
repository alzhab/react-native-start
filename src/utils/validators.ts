const emailValidator = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const phoneValidator = /^\+7 \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}$/;

export default {
	emailValidator,
	phoneValidator
}
