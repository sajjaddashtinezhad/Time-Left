import React, { useState, useEffect, useRef } from 'react';
import Logo from '../images/timeleft-with-text.svg';

const lifeExpectancyData = {
  "Hong Kong": { "male": 83.1, "female": 88.39 },
  "Japan": { "male": 81.99, "female": 88.03 },
  "South Korea": { "male": 81.44, "female": 87.4 },
  "French Polynesia": { "male": 82.03, "female": 86.74 },
  "Switzerland": { "male": 82.34, "female": 86.06 },
  "Australia": { "male": 82.43, "female": 85.97 },
  "Italy": { "male": 81.94, "female": 86.01 },
  "Singapore": { "male": 81.53, "female": 86.48 },
  "Spain": { "male": 81.27, "female": 86.59 },
  "Réunion": { "male": 80.81, "female": 86.57 },
  "Malta": { "male": 81.69, "female": 85.51 },
  "Norway": { "male": 82.11, "female": 85.09 },
  "France": { "male": 80.73, "female": 86.31 },
  "Sweden": { "male": 81.84, "female": 85.34 },
  "Macao": { "male": 81.26, "female": 85.49 },
  "United Arab Emirates": { "male": 82.37, "female": 84.44 },
  "Iceland": { "male": 81.8, "female": 84.57 },
  "Martinique": { "male": 79.63, "female": 85.84 },
  "Canada": { "male": 80.74, "female": 85.03 },
  "Israel": { "male": 80.67, "female": 84.81 },
  "Ireland": { "male": 80.79, "female": 84.72 },
  "Portugal": { "male": 79.89, "female": 85.37 },
  "Qatar": { "male": 81.96, "female": 83.6 },
  "Luxembourg": { "male": 80.91, "female": 84.06 },
  "Netherlands": { "male": 80.89, "female": 83.98 },
  "Belgium": { "male": 80.26, "female": 84.57 },
  "Guadeloupe": { "male": 78.56, "female": 85.77 },
  "New Zealand": { "male": 80.77, "female": 84 },
  "Austria": { "male": 79.97, "female": 84.57 },
  "Denmark": { "male": 80.39, "female": 84.1 },
  "Finland": { "male": 79.6, "female": 84.91 },
  "Greece": { "male": 79.74, "female": 84.6 },
  "Puerto Rico": { "male": 78.5, "female": 85.5 },
  "Cyprus": { "male": 80.05, "female": 83.93 },
  "Slovenia": { "male": 79.33, "female": 84.58 },
  "Germany": { "male": 79.42, "female": 84.01 },
  "United Kingdom": { "male": 79.72, "female": 83.45 },
  "Bahrain": { "male": 81.03, "female": 82.26 },
  "Chile": { "male": 79.67, "female": 83.37 },
  "Maldives": { "male": 80.2, "female": 83.17 },
  "Costa Rica": { "male": 78.6, "female": 83.72 },
  "Taiwan": { "male": 78.09, "female": 83.88 },
  "Kuwait": { "male": 79.63, "female": 82.15 },
  "Oman": { "male": 78.95, "female": 82.21 },
  "Czech Republic (Czechia)": { "male": 77.35, "female": 82.85 },
  "Panama": { "male": 77.1, "female": 82.84 },
  "Albania": { "male": 78.12, "female": 81.74 },
  "United States": { "male": 77.22, "female": 82.11 },
  "Estonia": { "male": 75.35, "female": 83.3 },
  "Saudi Arabia": { "male": 77.56, "female": 81.51 },
  "New Caledonia": { "male": 76.63, "female": 81.53 },
  "Poland": { "male": 75.31, "female": 82.61 },
  "Croatia": { "male": 75.8, "female": 81.95 },
  "Slovakia": { "male": 75.41, "female": 81.84 },
  "Uruguay": { "male": 74.59, "female": 82.17 },
  "Cuba": { "male": 76.06, "female": 80.84 },
  "China": { "male": 75.65, "female": 81.25 },
  "Bosnia and Herzegovina": { "male": 74.88, "female": 81.23 },
  "Jordan": { "male": 76.06, "female": 80.46 },
  "Peru": { "male": 75.82, "female": 80.45 },
  "Colombia": { "male": 75.36, "female": 80.77 },
  "Lebanon": { "male": 76.02, "female": 79.99 },
  "Iran": { "male": 76.22, "female": 79.99 },
  "Antigua and Barbuda": { "male": 74.93, "female": 80.6 },
  "Sri Lanka": { "male": 74.65, "female": 80.9 },
  "Turkey": { "male": 74.94, "female": 80.82 },
  "Ecuador": { "male": 75.08, "female": 80.46 },
  "Argentina": { "male": 75.14, "female": 80.16 },
  "North Macedonia": { "male": 75.41, "female": 79.83 },
  "Guam": { "male": 73.89, "female": 81.74 },
  "Montenegro": { "male": 74.12, "female": 80.6 },
  "French Guiana": { "male": 74.52, "female": 80.3 },
  "Hungary": { "male": 74.07, "female": 80.46 },
  "Curaçao": { "male": 72.87, "female": 81.1 },
  "Serbia": { "male": 73.89, "female": 80.35 },
  "Malaysia": { "male": 74.63, "female": 79.67 },
  "Tunisia": { "male": 74.34, "female": 79.5 },
  "Thailand": { "male": 72.65, "female": 81.17 },
  "Algeria": { "male": 75.3, "female": 78.13 },
  "Aruba": { "male": 73.99, "female": 79.06 },
  "Barbados": { "male": 73.93, "female": 78.91 },
  "Latvia": { "male": 71.94, "female": 80.72 },
  "Mayotte": { "male": 74.45, "female": 78.68 },
  "Cabo Verde": { "male": 73.25, "female": 79.53 },
  "Lithuania": { "male": 71.61, "female": 80.92 },
  "Romania": { "male": 72.74, "female": 79.82 },
  "Brazil": { "male": 73.14, "female": 79.3 },
  "Armenia": { "male": 71.76, "female": 79.73 },
  "Bulgaria": { "male": 72.52, "female": 79.51 },
  "U.S. Virgin Islands": { "male": 70.95, "female": 81.6 },
  "Morocco": { "male": 73.54, "female": 77.96 },
  "Brunei": { "male": 73.65, "female": 77.9 },
  "Grenada": { "male": 72.67, "female": 78.64 },
  "Mexico": { "male": 72.63, "female": 78.17 },
  "Mauritius": { "male": 72.28, "female": 78.5 },
  "Nicaragua": { "male": 72.64, "female": 77.74 },
  "Bangladesh": { "male": 73.55, "female": 76.94 },
  "Vietnam": { "male": 70.23, "female": 79.49 },
  "Ukraine": { "male": 69.99, "female": 79.54 },
  "Bahamas": { "male": 71.21, "female": 78.46 },
   "Georgia": { "male": 69.93, "female": 79.36 },
  "Belarus": { "male": 69.94, "female": 79.37 },
  "Azerbaijan": { "male": 71.86, "female": 77.44 },
  "Kazakhstan": { "male": 70.43, "female": 78.65 },
  "Paraguay": { "male": 71.14, "female": 77.22 },
  "Dominican Republic": { "male": 70.79, "female": 77.23 },
  "Belize": { "male": 71.23, "female": 76.83 },
  "Suriname": { "male": 70.73, "female": 77.12 },
  "North Korea": { "male": 71.66, "female": 76.02 },
  "Trinidad and Tobago": { "male": 70.64, "female": 76.96 },
  "Bhutan": { "male": 71.82, "female": 75.55 },
  "Russia": { "male": 67.69, "female": 79.32 },
  "Tonga": { "male": 69.64, "female": 76.69 },
  "Honduras": { "male": 70.65, "female": 75.85 },
  "Libya": { "male": 71.23, "female": 75.26 },
  "Seychelles": { "male": 70.23, "female": 76.83 },
  "State of Palestine": { "male": 69.72, "female": 76.86 },
  "Saint Lucia": { "male": 69.6, "female": 76.6 },
  "Syria": { "male": 70.58, "female": 75.42 },
  "Guatemala": { "male": 70.57, "female": 75.21 },
  "Venezuela": { "male": 69.05, "female": 76.82 },
  "Uzbekistan": { "male": 69.68, "female": 75.7 },
  "Iraq": { "male": 70.59, "female": 74.33 },
  "El Salvador": { "male": 67.99, "female": 76.7 },
  "India": { "male": 70.95, "female": 74.13 },
  "Mongolia": { "male": 67.75, "female": 76.88 },
  "Tajikistan": { "male": 69.78, "female": 74.29 },
  "Egypt": { "male": 69.82, "female": 74.22 },
  "Kyrgyzstan": { "male": 68.44, "female": 75.56 },
  "Samoa": { "male": 70.06, "female": 73.97 },
  "Vanuatu": { "male": 69.74, "female": 74.31 },
  "Micronesia": { "male": 68.97, "female": 74.79 },
  "Western Sahara": { "male": 70.06, "female": 73.99 },
  "Jamaica": { "male": 69.17, "female": 74.3 },
  "St. Vincent & Grenadines": { "male": 68.89, "female": 74.62 },
  "Moldova": { "male": 66.83, "female": 75.81 },
  "Indonesia": { "male": 69.29, "female": 73.61 },
  "Cambodia": { "male": 68.29, "female": 73.53 },
  "Nepal": { "male": 69.32, "female": 72.42 },
  "Solomon Islands": { "male": 69.47, "female": 72.34 },
  "Guyana": { "male": 66.73, "female": 74.22 },
  "Turkmenistan": { "male": 67.13, "female": 73.17 },
  "Sao Tome & Principe": { "male": 66.57, "female": 74.08 },
  "Philippines": { "male": 67.1, "female": 73.11 },
  "Yemen": { "male": 67.49, "female": 71.71 },
  "Laos": { "male": 67.25, "female": 71.8 },
  "Botswana": { "male": 66.9, "female": 72.01 },
  "Senegal": { "male": 67.21, "female": 71.26 },
  "Eritrea": { "male": 67.0, "female": 71.22 },
  "Mauritania": { "male": 66.9, "female": 70.97 },
  "Bolivia": { "male": 66.42, "female": 71.51 },
  "Uganda": { "male": 65.7, "female": 71.6 },
  "Gabon": { "male": 66.23, "female": 71.45 },
  "Rwanda": { "male": 65.92, "female": 70.39 },
  "Timor-Leste": { "male": 66.47, "female": 69.92 },
  "Pakistan": { "male": 65.58, "female": 70.47 },
  "Ethiopia": { "male": 64.62, "female": 71.3 },
  "Malawi": { "male": 64.45, "female": 70.96 },
  "Namibia": { "male": 63.6, "female": 71.63 },
  "Fiji": { "male": 65.6, "female": 69.72 },
  "Tanzania": { "male": 64.59, "female": 70.21 },
  "Myanmar": { "male": 64.18, "female": 70.59 },
  "Comoros": { "male": 65.22, "female": 69.45 },
  "Kiribati": { "male": 64.79, "female": 68.48 },
  "Sudan": { "male": 63.61, "female": 70.02 },
  "Zambia": { "male": 64.25, "female": 69.07 },
  "Afghanistan": { "male": 64.94, "female": 68.08 },
  "South Africa": { "male": 62.95, "female": 69.97 },
  "Djibouti": { "male": 63.92, "female": 68.96 },
  "Papua New Guinea": { "male": 63.94, "female": 69.34 },
  "Gambia": { "male": 64.53, "female": 67.96 },
  "Congo": { "male": 64.51, "female": 67.94 },
  "Ghana": { "male": 63.49, "female": 68.36 },
  "Haiti": { "male": 62.07, "female": 68.67 },
  "Angola": { "male": 62.44, "female": 67.54 },
  "Guinea-Bissau": { "male": 61.96, "female": 66.72 },
  "Eswatini": { "male": 61.45, "female": 67.26 },
  "Cameroon": { "male": 62.05, "female": 66.52 },
  "Equatorial Guinea": { "male": 62.4, "female": 66.1 },
  "Madagascar": { "male": 62.31, "female": 65.82 },
  "Kenya": { "male": 61.8, "female": 66.32 },
  "Burundi": { "male": 61.89, "female": 66.06 },
  "Mozambique": { "male": 60.66, "female": 66.93 },
  "Zimbabwe": { "male": 60.75, "female": 65.61 },
  "Togo": { "male": 62.87, "female": 63.39 },
  "Liberia": { "male": 61.14, "female": 63.8 },
  "Côte d'Ivoire": { "male": 60.32, "female": 64.49 },
  "DR Congo": { "male": 60.1, "female": 64.4 },
  "Sierra Leone": { "male": 60.41, "female": 63.9 },
  "Niger": { "male": 60.69, "female": 62.66 },
  "Burkina Faso": { "male": 59.28, "female": 63.62 },
  "Benin": { "male": 59.68, "female": 62.61 },
  "Guinea": { "male": 59.8, "female": 62.27 },
  "Mali": { "male": 59.46, "female": 62.38 },
  "Somalia": { "male": 56.63, "female": 61.7 },
  "Lesotho": { "male": 55.44, "female": 60.87 },
  "Central African Republic": { "male": 55.73, "female": 59.8 },
  "South Sudan": { "male": 54.87, "female": 60.86 },
  "Chad": { "male": 53.54, "female": 57.39 },
  "Nigeria": { "male": 54.45, "female": 55.12 }
};

const Calculator = () => {
  // State variables for user inputs
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [country, setCountry] = useState('');
  // State variable for the predicted death date
  const [predictedDeathDate, setPredictedDeathDate] = useState(null);
  // State variable for the remaining time broken down (still includes minutes/seconds for calculation, but not displayed)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  // State variable for total time left in days and hours
  const [totalDaysLeft, setTotalDaysLeft] = useState(0);
  const [totalHoursLeft, setTotalHoursLeft] = useState(0);
  // State for displaying messages to the user (e.g., "Please fill all fields")
  const [message, setMessage] = useState('');
  // Ref for the countdown interval to clear it later
  const countdownIntervalRef = useRef(null);

  // Effect to load data from localStorage on component mount
  useEffect(() => {
    try {
      const savedGender = localStorage.getItem('gender');
      const savedBirthdate = localStorage.getItem('birthdate');
      const savedCountry = localStorage.getItem('country');
      const savedPredictedDeathDate = localStorage.getItem('predictedDeathDate');

      if (savedGender) setGender(savedGender);
      if (savedBirthdate) setBirthdate(savedBirthdate);
      if (savedCountry) setCountry(savedCountry);
      if (savedPredictedDeathDate) {
        setPredictedDeathDate(new Date(savedPredictedDeathDate));
      }
    } catch (error) {
      console.error("Failed to load data from localStorage:", error);
      setMessage("Error loading saved data. Please try again.");
    }
  }, []);

  // Effect to update time remaining every second if a predicted death date exists
  useEffect(() => {
    // Clear any existing interval to prevent multiple timers running
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }

    if (predictedDeathDate) {
      // Immediately update time left when predictedDeathDate changes
      updateTimeLeft();
      // Set up an interval to update time left every second
      countdownIntervalRef.current = setInterval(updateTimeLeft, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts
    // or when predictedDeathDate becomes null
    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, [predictedDeathDate]);

  // Function to calculate and update the time remaining
  const updateTimeLeft = () => {
    if (!predictedDeathDate) return;

    const now = new Date();
    const difference = predictedDeathDate.getTime() - now.getTime(); // Difference in milliseconds

    if (difference <= 0) {
      // If the predicted date has passed, clear the interval and set time to zero
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTotalDaysLeft(0);
      setTotalHoursLeft(0);
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      setMessage("Time has passed. You are living on borrowed time!");
      return;
    }

    // Calculate days, hours, minutes, and seconds from the difference
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Calculate total days and total hours directly from the difference
    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(difference / (1000 * 60 * 60));


    setTimeLeft({ days, hours, minutes, seconds }); // Keep full breakdown in state for potential future use or debugging
    setTotalDaysLeft(totalDays);
    setTotalHoursLeft(totalHours);
    setMessage(''); // Clear any previous messages once time is calculated
  };

  // Function to handle the calculation of the predicted death date
  const calculateDeathDate = () => {
    // Basic validation to ensure all fields are filled
    if (!gender || !birthdate || !country) {
      setMessage("Please fill in all your details to calculate.");
      setPredictedDeathDate(null); // Clear previous prediction if fields are incomplete
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Reset countdown
      setTotalDaysLeft(0);
      setTotalHoursLeft(0);
      return;
    }

    const lifeExp = lifeExpectancyData[country]?.[gender];

    if (!lifeExp) {
      setMessage("Life expectancy data not available for the selected country/gender.");
      setPredictedDeathDate(null);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTotalDaysLeft(0);
      setTotalHoursLeft(0);
      return;
    }

    const bd = new Date(birthdate);
    // Create a new Date object for the predicted death date by adding life expectancy years
    // This directly adds years to the date
    const predicted = new Date(bd.setFullYear(bd.getFullYear() + lifeExp));

    setPredictedDeathDate(predicted);
    setMessage("Predicted date calculated!");

    // Store the data in localStorage
    try {
      localStorage.setItem('gender', gender);
      localStorage.setItem('birthdate', birthdate);
      localStorage.setItem('country', country);
      localStorage.setItem('predictedDeathDate', predicted.toISOString()); // Store as ISO string
    } catch (error) {
      console.error("Failed to save data to localStorage:", error);
      setMessage("Error saving data. Your prediction might not be saved.");
    }
  };

  // Function to clear all stored data and reset the app
  const clearData = () => {
    try {
      localStorage.removeItem('gender');
      localStorage.removeItem('birthdate');
      localStorage.removeItem('country');
      localStorage.removeItem('predictedDeathDate');
      setGender('');
      setBirthdate('');
      setCountry('');
      setPredictedDeathDate(null);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTotalDaysLeft(0);
      setTotalHoursLeft(0);
      setMessage("All data cleared.");
    } catch (error) {
      console.error("Failed to clear data from localStorage:", error);
      setMessage("Error clearing data.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 font-inter flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700">
        <img src={Logo} alt="Time Left Logo" className="mx-auto mb-10 h-12" />
        <div className="space-y-4">
          {/* Gender selection */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 appearance-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Birthdate input */}
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-300 mb-1">
              Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
            />
          </div>

          {/* Country selection */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
              Country
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 appearance-none"
            >
              <option value="">Select Country</option>
              {Object.keys(lifeExpectancyData).sort().map((countryName) => (
                <option key={countryName} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons for actions */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
            <button
              onClick={calculateDeathDate}
              className="flex-1 w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Predict My Time
            </button>
            <button
              onClick={clearData}
              className="flex-1 w-full px-5 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Clear Data
            </button>
          </div>
        </div>

        {/* Message display area */}
        {message && (
          <p className="mt-6 text-center text-sm font-medium text-red-400">{message}</p>
        )}

        {/* Display predicted date and countdown */}
        {predictedDeathDate && timeLeft.days >= 0 && (
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-3">Your Predicted Time</h2>
            <p className="text-sm text-gray-400 mb-4">
              Estimated Date: {predictedDeathDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            {/* Displaying only Days and Hours for the detailed breakdown */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-gray-700 rounded-lg">
                <p className="text-3xl font-bold text-white">{timeLeft.days}</p>
                <p className="text-xs text-gray-400">Days</p>
              </div>
              <div className="p-3 bg-gray-700 rounded-lg">
                <p className="text-3xl font-bold text-white">{timeLeft.hours}</p>
                <p className="text-xs text-gray-400">Hours</p>
              </div>
            </div>

            {/* Section for total days and total hours */}
            <div className="mt-6 pt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Total Time Remaining</h3>
                <div className="flex justify-center space-x-6">
                    <div className="p-3 bg-gray-700 rounded-lg min-w-[120px]">
                        <p className="text-2xl font-bold text-white">{totalDaysLeft}</p>
                        <p className="text-xs text-gray-400">Total Days</p>
                    </div>
                    <div className="p-3 bg-gray-700 rounded-lg min-w-[120px]">
                        <p className="text-2xl font-bold text-white">{totalHoursLeft}</p>
                        <p className="text-xs text-gray-400">Total Hours</p>
                    </div>
                </div>
            </div>
          </div>
        )}
        <div>
            <p className='text-gray-500 text-sm text-center mt-8'>All data is taken from <a className='underline' href='https://www.worldometers.info/demographics/life-expectancy/'>worldometers.info</a></p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
