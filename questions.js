// Questions Database
const questionsDatabase = {
    neutral: [
        {
            id: 1,
            question: "How often do you eat mandhi in a week?",
            options: ["Never", "Once", "2-3 times", "Daily"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 3,
            question: "How many alarms would you set before actually waking up?",
            options: ["1-2", "3-5", "6-10", "More than 10"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 14,
            question: "What is the longest you've waited for a KSRTC bus?",
            options: ["Less than 30 mins", "30-60 mins", "1-2 hours", "More than 2 hours"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 15,
            question: "Ever attended a hackathon for the free T-shirt and food?",
            options: ["Never", "Once", "Few times", "Always"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 16,
            question: "How often do you bunk class just to sit with your friends?",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 17,
            question: "How many nights does it take to cover one semester's syllabus?",
            options: ["1-2 nights", "3-5 nights", "1 week", "Impossible"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 19,
            question: "Why do you attend college daily?",
            options: ["To see your crush", "Gossip with friends", "Just for parents", "Actually study"],
            weights: [0, 1, 2, 3]
        },
        {
            id: 21,
            question: "How many hours do you spend in Lulu Mall doing nothing?",
            options: ["Less than 1 hour", "2-3hours", "near 10 hours", "More than 10 hours"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 23,
            question: "Have you ever joined Google Meet muted + camera off and slept through it?",
            options: ["Never", "Once", "Few times", "Always"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 25,
            question: "If exams were cancelled, would you feel relief or betrayal?",
            options: ["Relief", "Betrayal", "What exams?"],
            weights: [1, 3, 2]
        },
        {
            id: 26,
            question: "Which is more dangerous: a sudden surprise test or a surprise parent-teacher meeting?",
            options: ["Surprise test", "Parent-teacher meeting", "Both equally"],
            weights: [2, 0, 1]
        },
        {
            id: 28,
            question: "Will AI ever replace the class topper's 'last minute notes' before exams?",
            options: ["Yes, definitely", "No, never", "Maybe in future"],
            weights: [1, 3, 2]
        },
        {
            id: 29,
            question: "Who checks faster: Ctrl+S in VS Code or KTU while correcting answer papers?",
            options: ["Ctrl+S", "KTU correcting", "Neither"],
            weights: [3, 0, 1]
        },
        {
            id: 30,
            question: "Which is more impossible: finishing KTU syllabus in 3 days or maintaining 75% attendance?",
            options: ["Finishing syllabus", "Maintaining attendance", "Both equally impossible"],
            weights: [0, 1, 0]
        },
        {
            id: 35,
            question: "Irritate your fav teacher or curse your worst teacher?",
            options: ["Irritate fav teacher", "Curse worst teacher", "Do both"],
            weights: [1, 2, 0]
        },
        {
            id: 36,
            question: "Which is more unpredictable: Kerala rain or my coding output?",
            options: ["Kerala rain", "My coding output", "Both equally unpredictable"],
            weights: [2, 0, 1]
        },
        {
            id: 45,
            question: "Best source of motivation?",
            options: ["Family support", "Personal goals", "Peer pressure", "Future dreams"],
            weights: [3, 2, 0, 1]
        },
        {
            id: 49,
            question: "Which is more confusing: Interstellar or the KTU grading system?",
            options: ["Interstellar", "KTU grading", "Both equally confusing"],
            weights: [2, 0, 1]
        }
    ],
    
    male: [
        {
            id: 5,
            question: "How often do you say 'I will hit gym tmrw'?",
            options: ["Never", "Weekly", "Daily", "Multiple times a day"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 9,
            question: "How many porotta in one sitting?",
            options: ["1-2", "3-4", "5-6", "More than 6"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 10,
            question: "How many good morning messages before you get bored?",
            options: ["1-2", "3-6", "10-20", "Untill i get her...!"],
            weights: [2, 3, 1, 0]
        },
        {
            id: 13,
            question: "Stranded on an island with mother and gf...but you can only save one of them",
            options: ["Mother", "Girlfriend", "Dump both and save myself"],
            weights: [3, 0, 2]
        },
        {
            id: 18,
            question: "How many times have you called someone just to ask 'evideyaa'?",
            options: ["Never", "Few times", "Often", "Daily"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 22,
            question: "Chai with your buddy or movie with your gf?",
            options: ["Chai with buddy", "Movie with gf", "Chai untill i get a gf"],
            weights: [2, 3, 1]
        },
        {
            id: 31,
            question: "Which is scarier ?",
            options: ["Viva examiner", "Crush's dad", "My bestie"],
            weights: [2, 0, 1]
        },
        {
            id: 32,
            question: "What's more unreliable ?",
            options: ["Weather forecast", "will reach in 5 mins' friend", "My internet connection"],
            weights: [2, 1, 0]
        },
        {
            id: 38,
            question: "Which is more stressful: telling dad the petrol price or your semester fees?",
            options: ["Petrol price", "Semester fees", "gf expenses"],
            weights: [2, 0, 1]
        },
        {
            id: 39,
            question: "What's true love — mom's food, unlimited data, or your crush?",
            options: ["Mom's food", "Unlimited data", "Your crush", "**** all"],
            weights: [3, 1, 2, 0]
        },
        {
            id: 41,
            question: "Which is more painful: breakup or someone stepping on your new shoe?",
            options: ["Breakup", "New shoe stepped on", "Both equally"],
            weights: [0, 2, 1]
        },
        {
            id: 46,
            question: "What feels faster than light?",
            options: ["Semester holidays", "Lunch break in college", "Battery draining while gaming", "Mood Swings of my crush"],
            weights: [1, 2, 0, 0]
        }
    ],
    
    female: [
        {
            id: 4,
            question: "How many selfies do you take before posting one?",
            options: ["1-5", "6-15", "16-30", "More than 30"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 11,
            question: "How many hair ties do you lose a week?",
            options: ["None", "1-5", "10-20", "More than 20"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 12,
            question: "How many blocked contacts in your WhatsApp?",
            options: ["0-5", "6-15", "16-30", "More than 30"],
            weights: [3, 2, 1, 0]
        }
    ],
    
    // Common questions for both male and female
    common: [
        {
            id: 2,
            question: "Have you been in a relationship… if yes… then how many?",
            options: ["Never", "1", "2-3", "More than 3"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 6,
            question: "How often do you look yourself in a mirror in a day?",
            options: ["1-5 times", "6-15 times", "16-30 times", "Lost count"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 20,
            question: "How many crushes do you develop in a semester?",
            options: ["None", "1", "2-3", "Every day possibly"],
            weights: [3, 2, 1, 0]
        },
        {
            id: 24,
            question: "Which has more suspense: KTU results or your crush replying 'Hi'?",
            options: ["KTU results", "Crush replying", "I have no crush..so ktu results"],
            weights: [2, 1, 0]
        },
        {
            id: 33,
            question: "Which is faster: attendance drop or your heart rate when you see your crush in the corridor?",
            options: ["Attendance drop", "Heart rate", "I don't feel my heart when my crush is near"],
            weights: [1, 2, 0]
        },
        {
            id: 34,
            question: "Who's more mysterious: crush's mood swings or KTU's question paper?",
            options: ["Crush's mood", "KTU question paper", "Maybe how my parents react to my inter religious affair."],
            weights: [1, 2, 0]
        },
        {
            id: 37,
            question: "Which is more dangerous?",
            options: ["Power cut in summer", "Ex liking  your old post", "Maybe your buddy seeing your chat with ex"],
            weights: [2, 0, 1]
        },
        {
            id: 40,
            question: "Late night drive or candlelight dinner?",
            options: ["Late night drive", "Candlelight dinner", "I'm all alonee!!!"],
            weights: [2, 3, 1]
        },
        {
            id: 42,
            question: "Which is more stressful:?",
            options: ["Slow Wi-Fi", "Learning driving with dad", "Your leaked whatsapp chats"],
            weights: [2, 0, 1]
        },
        {
            id: 43,
            question: "Which is more powerful: mom's slippers or dad's verbal skills or crush's stare?",
            options: ["Mom's slippers", "Dad's verbal skills", "Crush's stare"],
            weights: [2, 1, 0]
        },
        {
            id: 44,
            question: "Which is harder — getting true love, finding Wi-Fi in hostel, getting chest piece in alfaham, or learning coding from scratch?",
            options: ["True love", "Wi-Fi in hostel", "Chest piece in alfaham", "Learning coding"],
            weights: [0, 2, 3, 1]
        },
        {
            id: 47,
            question: "Which is scarier: a horror film in Dolby Atmos at night or your dad asking for your phone unlock pattern?",
            options: ["Horror film", "Dad asking unlock pattern", "I'm not scared"],
            weights: [2, 0, 1]
        },
        {
            id: 48,
            question: "Pick one: Travel in time and go back to your 8th std, restart your old relationship, foresee your future, forget everything about yourself and start over",
            options: ["Go back to 8th std", "Restart old relationship", "Foresee future", "Forget everything and start over"],
            weights: [3, 0, 2, 1]
        },
        {
            id: 50,
            question: "Which has more twists: a Christopher Nolan movie or your love life?",
            options: ["Christopher Nolan movie", "My love life", "I don't even have a life"],
            weights: [2, 0, 1]
        }
    ]
};

// Function to get questions based on gender - Modified to take 4 gender-specific + 7 random
// Questions with IDs 20, 24, and 2 are mandatory in every attempt
function getQuestionsForGender(gender) {
    // Define mandatory question IDs
    const mandatoryQuestionIds = [20, 24, 2];
    
    // Find mandatory questions from all categories
    const mandatoryQuestions = [];
    const allQuestions = [...questionsDatabase.neutral, ...questionsDatabase.male, ...questionsDatabase.female, ...questionsDatabase.common];
    
    mandatoryQuestionIds.forEach(id => {
        const question = allQuestions.find(q => q.id === id);
        if (question) {
            mandatoryQuestions.push(question);
        }
    });
    
    let genderSpecificQuestions = [];
    let otherQuestions = [];
    
    if (gender === 'neutral') {
        // For gender neutral, take 1 from neutral (excluding mandatory) + remaining from all categories
        const availableNeutral = questionsDatabase.neutral.filter(q => !mandatoryQuestionIds.includes(q.id));
        genderSpecificQuestions = shuffleArray([...availableNeutral]).slice(0, 1);
        
        otherQuestions = shuffleArray([
            ...questionsDatabase.neutral.filter(q => !genderSpecificQuestions.find(gs => gs.id === q.id) && !mandatoryQuestionIds.includes(q.id)),
            ...questionsDatabase.common.filter(q => !mandatoryQuestionIds.includes(q.id))
        ]).slice(0, 7);
    } else if (gender === 'male') {
        // For male, take 1 from male-specific (excluding mandatory) + remaining from other categories
        const availableMale = questionsDatabase.male.filter(q => !mandatoryQuestionIds.includes(q.id));
        genderSpecificQuestions = shuffleArray([...availableMale]).slice(0, 1);
        
        otherQuestions = shuffleArray([
            ...questionsDatabase.male.filter(q => !genderSpecificQuestions.find(gs => gs.id === q.id) && !mandatoryQuestionIds.includes(q.id)),
            ...questionsDatabase.common.filter(q => !mandatoryQuestionIds.includes(q.id)),
            ...questionsDatabase.neutral.filter(q => !mandatoryQuestionIds.includes(q.id))
        ]).slice(0, 7);
    } else if (gender === 'female') {
        // For female, take 1 from female-specific (excluding mandatory) + remaining from other categories
        const availableFemale = questionsDatabase.female.filter(q => !mandatoryQuestionIds.includes(q.id));
        genderSpecificQuestions = shuffleArray([...availableFemale]).slice(0, 1);
        
        otherQuestions = shuffleArray([
            ...questionsDatabase.female.filter(q => !genderSpecificQuestions.find(gs => gs.id === q.id) && !mandatoryQuestionIds.includes(q.id)),
            ...questionsDatabase.common.filter(q => !mandatoryQuestionIds.includes(q.id)),
            ...questionsDatabase.neutral.filter(q => !mandatoryQuestionIds.includes(q.id))
        ]).slice(0, 7);
    }
    
    // Combine mandatory questions + gender-specific + other questions (total 11)
    const finalQuestions = shuffleArray([...mandatoryQuestions, ...genderSpecificQuestions, ...otherQuestions]);
    return finalQuestions.slice(0, 11);
}

// Function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
