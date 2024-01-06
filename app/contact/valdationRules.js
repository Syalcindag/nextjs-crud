// validationRules.js
export const validationRules = {
    nameSurname: {
      required: "Name and surname are required",
      pattern: {
        value: /^[A-Za-z]+ [A-Za-z]+$/,
        message: "Please enter both name and surname"
      },
      minLength: {
        value: 6,
        message: "Minimum 6 characters required"
      },
      maxLength: {
        value: 50,
        message: "Maximum 50 characters allowed"
      }
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email format"
      }
    },
    description: {
      required: "Description is required",
      minLength: {
        value: 10,
        message: "Minimum 10 characters required"
      }
    }
  };
  