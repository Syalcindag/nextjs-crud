// validationRules.js
export const validationRules = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Minimum 3 characters required"
      },
      maxLength: {
        value: 40,
        message: "Maximum 40 characters allowed"
      }
    },
    surname: {
      required: "Surname is required",
      minLength: {
        value: 3,
        message: "Minimum 3 characters required"
      },
      maxLength: {
        value: 40,
        message: "Maximum 40 characters allowed"
      }
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email format"
      }
    }
  };
  