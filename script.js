// Task 1: Profile object
const userProfile = {
  name: "Daniyar Abdusadykov",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Coding", "Gym", "Gaming"]
};

// Task 2: Calculate age
const currentYear = new Date().getFullYear();
let age = currentYear - userProfile.birthYear;
let ageInMonths = age * 12;

function updateUI() {
  document.getElementById("profileName").textContent = userProfile.name;
  document.getElementById("profileAge").textContent = age;
  document.getElementById("profileMonths").textContent = ageInMonths;
  document.getElementById("profileDev").textContent = userProfile.isDeveloper ? "Yes" : "No";
  document.getElementById("hobbiesCount").textContent = userProfile.hobbies.length;

  console.log("Current Profile:", userProfile);
  console.log("Calculated Age:", age, "Months:", ageInMonths);
}

// Task 3 & 4: Form Submit Event
const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const nameVal = document.getElementById("userNameInput").value;
  const yearVal = parseInt(document.getElementById("birthYearInput").value);

  if (nameVal.trim() !== "") {
    userProfile.name = nameVal;
  }
  
  if (!isNaN(yearVal)) {
    userProfile.birthYear = yearVal;
    age = currentYear - userProfile.birthYear;
    ageInMonths = age * 12;
  }

  updateUI();
  profileForm.reset();
});

// Task 5: DOM list manipulation
const hobbyList = document.getElementById("hobbyList");
const hobbyInput = document.getElementById("hobbyInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

function renderHobbies() {
  hobbyList.innerHTML = "";
  
  for (let i = 0; i < userProfile.hobbies.length; i++) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = userProfile.hobbies[i];
    hobbyList.appendChild(li);
  }
}

addBtn.addEventListener("click", function() {
  const newHobby = hobbyInput.value.trim();
  
  if (newHobby !== "") {
    userProfile.hobbies.push(newHobby);
    hobbyInput.value = "";
    renderHobbies();
    updateUI();
  }
});

removeBtn.addEventListener("click", function() {
  if (userProfile.hobbies.length > 0) {
    userProfile.hobbies.pop();
    renderHobbies();
    updateUI();
  }
});

// Init on load
updateUI();
renderHobbies();