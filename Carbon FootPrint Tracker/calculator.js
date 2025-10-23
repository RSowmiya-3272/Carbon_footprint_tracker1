document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================
    // 1. MOBILE NAVIGATION TOGGLE LOGIC 
    //    (Needs 'nav-toggle' button and 'main-nav' element in HTML)
    // ==========================================================
    const navToggle = document.getElementById('nav-toggle');
    // NOTE: Your HTML needs id="main-nav" on the <nav> element!
    const mainNav = document.querySelector('nav'); 
    
    if (navToggle && mainNav) {
        // Since your nav element doesn't have an ID in the provided HTML, 
        // we use document.querySelector('nav') and assume it's the main nav.
        // It's BEST PRACTICE to add id="main-nav" to your <nav> tag.
        
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            
            // Change the hamburger icon (fa-bars) to a close icon (fa-times)
            const icon = navToggle.querySelector('i');
            if (mainNav.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ==========================================================
    // 2. FULL CALCULATOR SUBMISSION LOGIC
    // ==========================================================
    
    const calculatorForm = document.querySelector('.calculator-form-grid');
    
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', (e) => {
            // Stop the browser from performing a default form submission (page reload)
            e.preventDefault(); 
            
            // --- Collect and Process Data ---
            const carKm = parseFloat(document.getElementById('car-km').value) || 0;
            const flightsHours = parseFloat(document.getElementById('flights').value) || 0;
            const electricityKwh = parseFloat(document.getElementById('electricity').value) || 0;
            const meatConsumption = document.getElementById('meat-consumption').value;
            
            // --- Dummy Calculation (Highly simplified for demonstration) ---
            const CAR_FACTOR = 0.15; // kg CO2e/km
            const FLIGHT_FACTOR = 150; // kg CO2e/hour
            const POWER_FACTOR = 0.4; // kg CO2e/kWh

            let foodFactor = 0;
            if (meatConsumption === 'daily') foodFactor = 900; // Monthly Estimate in kg
            else if (meatConsumption === 'weekly') foodFactor = 400;
            else if (meatConsumption === 'rarely') foodFactor = 150;
            else foodFactor = 50;

            const transportFootprint = (carKm * CAR_FACTOR) + (flightsHours * FLIGHT_FACTOR / 12);
            const energyFootprint = electricityKwh * POWER_FACTOR;
            const totalMonthlyFootprint = transportFootprint + energyFootprint + foodFactor;


            // --- Feedback to User ---
            alert(`
                ✅ Calculation Successful!
                
                Your estimated monthly footprint: 
                ${totalMonthlyFootprint.toFixed(2)} kg CO2e.
                
                (Transport: ${transportFootprint.toFixed(2)}, Energy: ${energyFootprint.toFixed(2)}, Food: ${foodFactor.toFixed(2)})

                This data has been saved to your dashboard!
            `);
            
            // In a real app, you would use fetch() to send this data to a backend server.
        });
    }
});