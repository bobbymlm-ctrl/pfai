// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {

    // --- Login Page Logic (index.html) ---
    const studentLoginBtn = document.getElementById("student-login-btn");
    const adminLoginBtn = document.getElementById("admin-login-btn");

    if (studentLoginBtn) {
        studentLoginBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent form submission
            console.log("Simulating student login...");
            // In a real app, you'd verify email/password first
            window.location.href = "student-dashboard.html";
        });
    }

    if (adminLoginBtn) {
        adminLoginBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent form submission
            console.log("Simulating admin login...");
            // In a real app, you'd verify email/password first
            window.location.href = "admin-dashboard.html";
        });
    }

    // --- Dashboard Logic (Shared) ---
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Logging out...");
            window.location.href = "index.html";
        });
    }

    // --- Admin Dashboard Form Logic ---
    const addInstitutionForm = document.getElementById("add-institution-form");
    if (addInstitutionForm) {
        addInstitutionForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Get data from the form
            const formData = new FormData(addInstitutionForm);
            const institutionData = {
                name: formData.get("institutionName"),
                type: formData.get("type"),
                country: formData.get("country"),
                website: formData.get("websiteURL"),
                isPartner: formData.has("isPartner") // .has() returns true/false for checkboxes
            };

            // In a real app, you would send this 'institutionData' object
            // to your Firebase database.
            console.log("Submitting new institution data (simulation):", institutionData);
            
            alert("Institution submitted (simulation)!\nCheck the console (F12) to see the data.");
            addInstitutionForm.reset(); // Clear the form
        });
    }

    // --- Student Dashboard Form Logic ---
    const studentProfileForm = document.getElementById("student-profile-form");
    if (studentProfileForm) {
        studentProfileForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(studentProfileForm);
            
            // In a real app, you would send this data to Firebase
            // to update the 'Student Profile' and 'Academic Background' tables
            console.log("Updating student profile (simulation)...");
            alert("Profile updated (simulation)!");
        });
    }

});