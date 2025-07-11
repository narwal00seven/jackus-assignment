// Handles add/edit employee form logic and validation

function validateEmployeeForm(form) {
  let valid = true;
  let errors = {};
  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const department = form.department.value;
  const role = form.role.value;

  if (!firstName) {
    valid = false;
    errors.firstName = 'First name is required.';
  }
  if (!lastName) {
    valid = false;
    errors.lastName = 'Last name is required.';
  }
  if (!email) {
    valid = false;
    errors.email = 'Email is required.';
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    valid = false;
    errors.email = 'Invalid email format.';
  }
  if (!department) {
    valid = false;
    errors.department = 'Department is required.';
  }
  if (!role) {
    valid = false;
    errors.role = 'Role is required.';
  }
  return { valid, errors };
}

// Add more logic for handling form submission, populating fields for edit, etc. 