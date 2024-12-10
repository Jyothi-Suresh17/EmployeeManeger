

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false, // changed to false
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile and submit the sales data for the current month.",
        taskDate: "2024-12-10",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting and share project updates.",
        taskDate: "2024-12-03",
        category: "Meetings",
      },
      {
        active: false,
        newTask: true, // changed to true
        completed: false,
        failed: false,
        taskTitle: "Client Follow-Up",
        taskDescription: "Follow up with the client regarding project requirements.",
        taskDate: "2024-12-06",
        category: "Client Relations",
      },
    ],
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true, // changed to true
        completed: false,
        failed: true,
        taskTitle: "Update Documentation",
        taskDescription: "Revise the project documentation with recent changes.",
        taskDate: "2024-12-01",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false, // changed to false
        completed: false,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Resolve issues reported in the bug tracker.",
        taskDate: "2024-12-05",
        category: "Development",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false, // changed to false
        completed: false,
        failed: false,
        taskTitle: "Conduct Training",
        taskDescription: "Host a training session for new team members.",
        taskDate: "2024-12-07",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Improve the performance of the company database.",
        taskDate: "2024-12-02",
        category: "Database",
      },
      {
        active: false,
        newTask: true, // changed to true
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Analyze competitors and prepare a market research report.",
        taskDate: "2024-12-09",
        category: "Research",
      },
    ],
  },
  {
    id: 4,
    firstName: "Aanya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit Budget Proposal",
        taskDescription: "Prepare and submit the budget proposal for next quarter.",
        taskDate: "2024-12-04",
        category: "Finance",
      },
      {
        active: true,
        newTask: false, // changed to false
        completed: false,
        failed: false,
        taskTitle: "Website Update",
        taskDescription: "Update the company website with recent news and events.",
        taskDate: "2024-12-08",
        category: "Web Development",
      },
    ],
  },
  {
    id: 5,
    firstName: "Diya",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false, // changed to false
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create a presentation for the upcoming client meeting.",
        taskDate: "2024-12-06",
        category: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "System Maintenance",
        taskDescription: "Perform routine maintenance on the IT systems.",
        taskDate: "2024-12-03",
        category: "IT",
      },
    ],
  },
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));

}

export const getLocalStorage= ()=>{
  const storedEmployees = JSON.parse(localStorage.getItem('employees'));
 
  
  const storedAdmin = JSON.parse(localStorage.getItem('admin'));
  

  return {storedEmployees,storedAdmin}

}