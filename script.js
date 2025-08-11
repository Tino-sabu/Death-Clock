// Global Variables
let currentUser = {
    name: '',
    age: 0,
    gender: '',
    answers: [],
    lifeScore: 0
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let lifeCounterInterval;
let screens = {}; // Initialize as empty object

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize screens object after DOM is loaded
    screens = {
        welcome: document.getElementById('welcome-screen'),
        personalInfo: document.getElementById('personal-info-screen'),
        questions: document.getElementById('questions-screen'),
        results: document.getElementById('results-screen')
    };
    
    initializeApp();
    setupEventListeners();
    startClockAnimation();
});

function initializeApp() {
    showScreen('welcome');
    resetUserData();
}

function setupEventListeners() {
    // Personal form submission
    document.getElementById('personal-form').addEventListener('submit', handlePersonalFormSubmit);
    
    // Navigation listeners
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
}

function handleNavClick(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
}

// Home Navigation Function
function goToHome() {
    showScreen('welcome');
    resetUserData();
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector('.nav-link[onclick="goToHome()"]').classList.add('active');
}

// Screen Management
function showScreen(screenName) {
    console.log('Switching to screen:', screenName); // Debug log
    console.log('Available screens:', Object.keys(screens)); // Debug log
    
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });
    
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
        console.log('Screen switched successfully'); // Debug log
    } else {
        console.error('Screen not found:', screenName);
    }
}

// Welcome Screen Functions
function showWelcome() {
    showScreen('welcome');
    resetUserData();
}

function showPersonalInfo() {
    showScreen('personalInfo');
}

// Personal Information Form Handler
function handlePersonalFormSubmit(e) {
    e.preventDefault();
    
    console.log('Form submitted'); // Debug log
    
    const formData = new FormData(e.target);
    currentUser.name = formData.get('name').trim();
    currentUser.age = parseInt(formData.get('age'));
    currentUser.gender = formData.get('gender');
    
    console.log('User data:', currentUser); // Debug log
    
    if (!currentUser.name || isNaN(currentUser.age) || !currentUser.gender) {
        alert('Please fill in all required fields.');
        return;
    }
    
    try {
        // Generate questions based on gender
        currentQuestions = getQuestionsForGender(currentUser.gender);
        console.log('Questions generated:', currentQuestions.length); // Debug log
        
        currentQuestionIndex = 0;
        currentUser.answers = [];
        
        // Update total questions count
        document.getElementById('total-questions').textContent = currentQuestions.length;
        
        // Start quiz
        console.log('Switching to questions screen'); // Debug log
        showScreen('questions');
        displayQuestion();
    } catch (error) {
        console.error('Error in form submission:', error);
        alert('An error occurred. Please try again.');
    }
}

// Quiz Functions
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        calculateResults();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    const container = document.getElementById('question-container');
    
    // Update progress
    updateProgress();
    
    // Create question HTML
    container.innerHTML = `
        <div class="question-content slide-up">
            <h3 class="question-title">${question.question}</h3>
            <div class="options-grid">
                ${question.options.map((option, index) => `
                    <div class="option">
                        <input type="radio" 
                               id="option-${index}" 
                               name="question-${question.id}" 
                               value="${index}" 
                               class="option-input">
                        <label for="option-${index}" class="option-label">
                            ${option}
                        </label>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners to options
    container.querySelectorAll('.option-input').forEach(input => {
        input.addEventListener('change', handleOptionSelect);
    });
    
    // Update navigation buttons
    updateNavigationButtons();
}

function handleOptionSelect(e) {
    const selectedValue = parseInt(e.target.value);
    const question = currentQuestions[currentQuestionIndex];
    
    // Store answer
    currentUser.answers[currentQuestionIndex] = {
        questionId: question.id,
        selectedOption: selectedValue,
        weight: question.weights[selectedValue]
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Add visual feedback
    document.querySelectorAll('.option-label').forEach(label => {
        label.style.transform = 'scale(1)';
    });
    e.target.nextElementSibling.style.transform = 'scale(1.02)';
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = !currentUser.answers[currentQuestionIndex];
    
    // Update next button text for last question
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.innerHTML = '<span>See Results</span><i class="fas fa-chart-line"></i>';
    } else {
        nextBtn.innerHTML = '<span>Next</span><i class="fas fa-arrow-right"></i>';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // Show loading and calculate results
        showLoading();
        setTimeout(() => {
            calculateResults();
            hideLoading();
        }, 2000);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Results Calculation

function calculateResults() {
    // Calculate bonus years from answers with age-based adjustment
    let rawYears = 0;
    currentUser.answers.forEach(answer => {
        rawYears += answer.weight;
    });

    const currentAge = currentUser.age;
    let bonusYears = rawYears;
    if (currentAge < 20) {
        bonusYears = rawYears + 10;
    } else if (currentAge >= 20 && currentAge <= 40) {
        bonusYears = rawYears ;
    } else if (currentAge > 40 && currentAge <= 60) {
        bonusYears = rawYears-10 ;
    }else if (currentAge > 60) {
        bonusYears = rawYears - 15;
    } // else (41-60): use exact years


    // Ensure bonusYears is not negative
    bonusYears = Math.max(0, bonusYears);

    let projectedLifespan = currentAge + bonusYears;
    const remainingYears = Math.max(projectedLifespan - currentAge, 1);
    const lifeWastedPercentage = (currentAge / projectedLifespan) * 100;

    currentUser.lifeScore = remainingYears;
    currentUser.projectedLifespan = projectedLifespan;
    currentUser.lifeWastedPercentage = lifeWastedPercentage;

    // Show results screen and display the results
    showScreen('results');
    displayResults(remainingYears);
}

function displayResults(remainingYears) {
    // Update user name display
    const userName = currentUser.name || 'You';
    document.getElementById('user-name-display').textContent = userName + "'s";
    document.getElementById('user-name-subtitle').textContent = userName;
    
    // Format the time remaining text
    const yearsParts = remainingYears.toFixed(2).split('.');
    const timeText = `${yearsParts[0]}.${yearsParts[1]} years`;
    document.getElementById('time-remaining-text').textContent = timeText;
    
    // Display life wasted percentage
    const lifeWastedElement = document.getElementById('life-wasted-percentage');
    if (lifeWastedElement && currentUser.lifeWastedPercentage) {
        lifeWastedElement.textContent = currentUser.lifeWastedPercentage.toFixed(1);
    }
    
    // Calculate time units
    const days = remainingYears * 365.25;
    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    
    // Display with high precision
    const precision = 10;
    const detailedYearsParts = remainingYears.toFixed(precision).split('.');
    
    document.querySelector('.counter-value .years').textContent = detailedYearsParts[0];
    document.querySelector('.counter-value .decimals').textContent = detailedYearsParts[1] || '0000000000';
    
    // Display other units
    document.getElementById('days-remaining').textContent = Math.floor(days).toLocaleString();
    document.getElementById('hours-remaining').textContent = Math.floor(hours).toLocaleString();
    document.getElementById('minutes-remaining').textContent = Math.floor(minutes).toLocaleString();
    document.getElementById('seconds-remaining').textContent = Math.floor(seconds).toLocaleString();
    
    // Start live countdown
    startLiveCountdown(remainingYears);
}

function startLiveCountdown(initialYears) {
    // Clear any existing interval
    if (lifeCounterInterval) {
        clearInterval(lifeCounterInterval);
    }
    
    const startTime = Date.now();
    const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
    
    lifeCounterInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const elapsedYears = elapsed / millisecondsPerYear;
        const currentRemainingYears = Math.max(0, initialYears - elapsedYears);
        
        // Update display with high precision
        const precision = 10;
        const yearsParts = currentRemainingYears.toFixed(precision).split('.');
        
        document.querySelector('.counter-value .years').textContent = yearsParts[0];
        document.querySelector('.counter-value .decimals').textContent = yearsParts[1] || '0000000000';
        
        // Update the subtitle text with current remaining time
        const displayYears = currentRemainingYears.toFixed(2);
        const timeRemainingElement = document.getElementById('time-remaining-text');
        if (timeRemainingElement) {
            timeRemainingElement.textContent = `${displayYears} years`;
        }
        
        // Update other units
        const days = currentRemainingYears * 365.25;
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        
        document.getElementById('days-remaining').textContent = Math.floor(days).toLocaleString();
        document.getElementById('hours-remaining').textContent = Math.floor(hours).toLocaleString();
        document.getElementById('minutes-remaining').textContent = Math.floor(minutes).toLocaleString();
        document.getElementById('seconds-remaining').textContent = Math.floor(seconds).toLocaleString();
        
    }, 100); // Update every 100ms for smooth animation
}

// Utility Functions
function showLoading() {
    document.getElementById('loading-overlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loading-overlay').classList.remove('active');
}

function resetApp() {
    // Clear countdown interval
    if (lifeCounterInterval) {
        clearInterval(lifeCounterInterval);
    }
    
    // Reset user data
    resetUserData();
    
    // Reset form
    document.getElementById('personal-form').reset();
    
    // Show welcome screen
    showScreen('welcome');
}

function resetUserData() {
    currentUser = {
        name: '',
        age: 0,
        gender: '',
        answers: [],
        lifeScore: 0
    };
    currentQuestions = [];
    currentQuestionIndex = 0;
}

function shareResults() {
    const remainingYears = currentUser.lifeScore.toFixed(2);
    const userName = currentUser.name || 'Someone';
    const shareText = `🕐 ${userName} has ${remainingYears} years remaining according to Death Clock! Calculate yours at Death Clock app. #DeathClock #LifeCounter`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Death Clock - Life Counter',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Results copied to clipboard!');
        }).catch(() => {
            alert('Unable to share. Try again later.');
        });
    }
}

// Clock Animation
function startClockAnimation() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourHand = document.querySelector('.clock-hand.hour');
    const minuteHand = document.querySelector('.clock-hand.minute');
    const secondHand = document.querySelector('.clock-hand.second');
    
    if (hourHand && minuteHand && secondHand) {
        const hourDegrees = (hours * 30) + (minutes * 0.5);
        const minuteDegrees = minutes * 6;
        const secondDegrees = seconds * 6;
        
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        
        // Update every second
        setInterval(() => {
            const now = new Date();
            const seconds = now.getSeconds();
            const secondDegrees = seconds * 6;
            secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        }, 1000);
    }
}

// Smooth Scrolling for Navigation
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.circle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.02;
        const x = mouseX * speed * 100;
        const y = mouseY * speed * 100;
        
        circle.style.transform = `translate(${x}px, ${y}px) rotate(${x + y}deg)`;
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.form-container, .quiz-container, .results-container');
    animatedElements.forEach(el => observer.observe(el));
});
