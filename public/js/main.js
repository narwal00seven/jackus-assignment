// Employee Directory Main JS
// Handles dashboard rendering, search, filter, sort, and pagination

let employees = [];
let filteredEmployees = [];
let currentPage = 1;
let pageSize = 10;
let sortKey = '';
let sortAsc = true;

// Load mock data (in real Freemarker, this would be injected)
function loadEmployees() {
  let local = localStorage.getItem('employees');
  if (local) {
    employees = JSON.parse(local);
  } else {
    fetch('../data/employees.json')
      .then(res => res.json())
      .then(data => {
        employees = data;
        filteredEmployees = [...employees];
        renderEmployeeList();
        renderPagination();
      });
    return;
  }
  filteredEmployees = [...employees];
  renderEmployeeList();
  renderPagination();
}
loadEmployees();

// Toggle filter sidebar
const filterBtn = document.querySelector('.filter-btn');
const filterSidebar = document.querySelector('.filter-sidebar');
const filterOverlay = document.getElementById('filterOverlay');
function openFilterSidebar() {
  filterSidebar.classList.add('show');
  filterOverlay.classList.add('show');
}
function closeFilterSidebar() {
  filterSidebar.classList.remove('show');
  filterOverlay.classList.remove('show');
}
if (filterBtn && filterSidebar && filterOverlay) {
  filterBtn.addEventListener('click', () => {
    if (filterSidebar.classList.contains('show')) {
      closeFilterSidebar();
    } else {
      openFilterSidebar();
    }
  });
  filterOverlay.addEventListener('click', closeFilterSidebar);
}

function renderEmployeeList() {
  const list = document.getElementById('employee-list');
  if (!list) return;
  list.innerHTML = '';
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageEmployees = filteredEmployees.slice(start, end);
  if (pageEmployees.length === 0) {
    list.innerHTML = '<p>No employees found.</p>';
    return;
  }
  pageEmployees.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <div class="info"><b>Email:</b> ${emp.email}</div>
      <div class="info"><b>Department:</b> ${emp.department}</div>
      <div class="info"><b>Role:</b> ${emp.role}</div>
      <div class="card-actions">
        <button class="edit-btn" onclick="editEmployee('${emp.id}')">Edit</button>
        <button class="delete-btn" onclick="deleteEmployee('${emp.id}')">Delete</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderPagination() {
  const total = filteredEmployees.length;
  const totalPages = Math.ceil(total / pageSize);
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = (i === currentPage) ? 'active' : '';
    btn.onclick = () => {
      currentPage = i;
      renderEmployeeList();
      renderPagination();
    };
    pagination.appendChild(btn);
  }
}

// Search, filter, sort, and event handlers would be added here 
window.onApplyFilter = function() {
  const firstName = document.getElementById('filterFirstName').value.trim().toLowerCase();
  const department = document.getElementById('filterDepartment').value.trim().toLowerCase();
  const role = document.getElementById('filterRole').value.trim().toLowerCase();
  filteredEmployees = employees.filter(emp => {
    return (
      (!firstName || emp.firstName.toLowerCase().includes(firstName)) &&
      (!department || emp.department.toLowerCase().includes(department)) &&
      (!role || emp.role.toLowerCase().includes(role))
    );
  });
  currentPage = 1;
  renderEmployeeList();
  renderPagination();
  closeFilterSidebar();
};
window.onResetFilter = function() {
  document.getElementById('filterFirstName').value = '';
  document.getElementById('filterDepartment').value = '';
  document.getElementById('filterRole').value = '';
  filteredEmployees = [...employees];
  currentPage = 1;
  renderEmployeeList();
  renderPagination();
  closeFilterSidebar();
}; 

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    const value = this.value.trim().toLowerCase();
    if (!value) {
      filteredEmployees = [...employees];
    } else {
      filteredEmployees = employees.filter(emp =>
        (emp.firstName + ' ' + emp.lastName).toLowerCase().includes(value) ||
        emp.email.toLowerCase().includes(value)
      );
    }
    currentPage = 1;
    renderEmployeeList();
    renderPagination();
  });
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  });
} 