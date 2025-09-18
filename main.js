
document.getElementById('whatIsChatPGT').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('whatIsPanel').style.display = 'block';
        });
        document.getElementById('whoIsJosh').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('whatIsJosh').style.display = 'block';
        });
        const keywordResponses = [
            { keys: ["hello", "hi", "hey"], response: "Hey there! How can I assist you today?" },
            { keys: ["workout", "exercise"], response: "Try a 30-minute full-body workout including squats, push-ups, and planks!" },
            { keys: ["diet", "nutrition", "food"], response: "A balanced diet includes lean proteins, complex carbs, and healthy fats." },
            { keys: ["bye", "goodbye", "see you"], response: "Goodbye! Stay strong and motivated!" },
            { keys: ["what's your name", "who are you", "introduce yourself"],
              response: "I'm yoshuAI, an AI created to assist you with information and conversations!"
            },
            { keys: ["josh", "who is josh", "about josh"], response: "Josh is a 17-year-old guy who created this AI to help you!" },
            { keys: ["keywords", "commands"], response: "You can ask about workouts, diet, or just say hello!" },
            { keys: ["help", "assist"], response: "I'm here to help! Ask me anything about workouts or diet." },
            { keys: ["how are you", "how are you doing", "what's up"],
              response: "I'm doing great, thanks for asking! How can I help you today?"
            },
            { keys: ["thank you", "thanks"], response: "You're welcome! If you have more questions, feel free to ask!" },
            { keys: ["what is the weather", "weather update", "is it raining"],
              response: "I can help with that! Please provide your location, and I'll check the weather for you."
            },
            { keys: ["motivation", "inspiration"], response: "Stay positive! Every step you take is a step towards your goal!" },
            { keys: ["advice", "suggestion"], response: "Always listen to your body and adjust your workouts accordingly!" },
            { keys: ["fun fact", "interesting fact"], response: "Did you know that regular exercise can boost your mood and energy levels?" },
            { keys: ["quote", "inspirational quote"], response: "Believe in yourself and all that you are. You are capable of amazing things!" },
            { keys: ["feedback", "suggestions"], response: "I appreciate your feedback! It helps me improve." },
            { keys: ["joke", "funny"], response: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
            { keys: ["music", "song", "playlist"], response: "I recommend creating a workout playlist with your favorite upbeat songs!" },
            { keys: ["movie", "film", "recommendation"], response: "How about watching a motivational movie like 'Rocky' or 'The Pursuit of Happyness'?" },
            { keys: ["book", "reading", "recommendation"], response: "I suggest reading 'Atomic Habits' for great insights on building good habits!" },
            { keys: ["hobby", "interest"], response: "Exploring new hobbies can be fun! Have you tried painting or hiking?" },
            { keys: ["travel", "destination"], response: "Traveling is amazing! Do you have a dream destination in mind?" },
            { keys: ["food", "recipe"], response: "How about trying a healthy smoothie with spinach, banana, and almond milk?" },
            { keys: ["sleep", "rest"], response: "Getting enough sleep is crucial for recovery. Aim for 7-9 hours!" },
            { keys: ["stress", "relaxation"], response: "Try deep breathing exercises or meditation to relieve stress." },
            { keys: ["goal", "achievement"], response: "Setting realistic goals is key! Start small and build up." },
            { keys: ["how do I reset my password", "forgot password", "password reset"], response: "To reset your password, go to the login page and click on 'Forgot Password.' Follow the instructions sent to your email."},
            { keys: ["how do I contact support", "customer service", "support team"], response: "You can contact support by emailing "},
            { keys: ["what is artificial intelligence", "AI definition", "what is AI"],
              response: "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems."
            },
            { keys: ["where are you from", "origin of AI", "where do you live"],
              response: "I don’t have a physical location, but I exist in the digital world to assist you!"
            },
            { keys: ["how many words", "word count", "count words"], response: "I can generate a response with a specific number of words. Just ask!" },
            { keys: ["generate 5 words", "5 words", "five words"], response: generateWordsResponse(5) },
            { keys: ["generate 10 words", "10 words", "ten words"], response: generateWordsResponse(10) },
            { keys: ["generate 15 words", "15 words", "fifteen words"], response: generateWordsResponse(15) },
            { keys: ["generate 20 words", "20 words", "twenty words"], response: generateWordsResponse(20) },
            { keys: ["generate 25 words", "25 words", "twenty-five words"], response: generateWordsResponse(25) },
            { keys: ["generate 30 words", "30 words", "thirty words"], response: generateWordsResponse(30) },
            { keys: ["generate 35 words", "35 words", "thirty-five words"], response: generateWordsResponse(35) },
            { keys: ["generate 40 words", "40 words", "forty words"], response: generateWordsResponse(40) },
            { keys: ["generate 45 words", "45 words", "forty-five words"], response: generateWordsResponse(45) },
            { keys: ["generate 50 words", "50 words", "fifty words"], response: generateWordsResponse(50) },
            { keys: ["what is programming", "define programming", "explain programming",], response: "Programming is the process of creating instructions for computers to perform specific tasks using programming languages." },
            { keys: ["can you teach me how to program", "can you teach me programming", "can you teach me"], response: "Absolutely! I can help you learn programming basics, concepts, and provide examples. Just ask what you want to learn! What would you like to focus on learning more about in programming? Are you interested in web development with HTML, CSS, and JavaScript, or would you prefer diving into something like C++ or C for more low-level programming and software development? Or maybe something else entirely?" },
            { keys: ["what programming languages do you know", "what programming languages can you use", "what programming languages do you understand"], response: "I can assist with a variety of programming languages including Python, JavaScript, Java, C++, C#, Ruby, PHP, Swift, and more. Just let me know what you need help with!" },
            { keys: ["how do I start learning programming", "how to start programming", "how to begin programming"], response: "To start learning programming, choose a beginner-friendly language like Python or JavaScript, find online tutorials or courses, practice coding regularly, and work on small projects to build your skills." },
            {
    "keys": ["how do I start coding C++", "how to begin programming in C++", "where do I start with C++", "how to learn c++"],
    "response": "To start coding in C++, you’ll want to set up a development environment first. Download and install a C++ compiler like GCC or an IDE like Visual Studio or Code::Blocks. Then, begin with basic concepts like variables, loops, and functions. From there, you can explore more advanced topics like object-oriented programming and memory management. You can follow along with tutorials on YouTube, or use online resources like freeCodeCamp and Codecademy."
  },
  {
    "keys": ["what programming languages do you know", "what programming languages can you use", "what programming languages do you understand"],
    "response": "I can assist with a variety of programming languages including Python, JavaScript, Java, C++, C#, Ruby, PHP, Swift, and more. Just let me know what you need help with!"
  },
  {
    "keys": ["how do I start learning programming", "how to start programming", "how to begin programming"],
    "response": "To start learning programming, choose a beginner-friendly language like Python or JavaScript, find online tutorials or courses, practice coding regularly, and work on small projects to build your skills."
  },
  {
    "keys": ["how do I learn HTML, CSS, JavaScript", "how to start web development", "beginner web development resources"],
    "response": "If you want to learn HTML, CSS, and JavaScript, start by mastering HTML and CSS for creating and styling webpages. Then, dive into JavaScript to add interactivity. There are plenty of free resources like freeCodeCamp, W3Schools, and YouTube tutorials to guide you. It’s also a great idea to build small projects like personal websites or interactive to-do apps to apply your learning."
  },
  {
    "keys": ["how to learn C#", "beginner C# programming", "getting started with C#"],
    "response": "To get started with C#, install Visual Studio, which has a lot of helpful tools for writing C# code. Begin with learning the basics like variables, conditionals, and loops. After that, explore object-oriented programming concepts. Websites like Microsoft Learn, Udemy, or YouTube tutorials can provide structured courses for beginners."
  },
  {
  "keys": ["why can't you answer my question", "why don't you understand me", "why are you not answering properly", "why do you give wrong answers", "whats wrong with you", "what cant you understand", "thats incorrect", "wrong answer", "wrong", "incorrect", "you are wrong", "you don't understand", "you don't know", "you don't get it", "you don't understand me", "you don't know what I'm saying", "you don't know what I mean", "you don't know what I want", "you don't know what I'm asking", "you don't know what I'm trying to say"],
  "response": "I'm just a chatbot, so I don’t always understand everything perfectly. I try my best to help based on the words and phrases you use, but I'm not a real human or a full AI—I can only respond with what I've been programmed to recognize. If something doesn’t make sense, feel free to rephrase your question and I’ll try again!"
},
{
  "keys": ["how to code"],
  "response": "Coding is the process of writing instructions for a computer to follow. To start coding, choose a beginner-friendly language like Python or JavaScript. Then, find some tutorials on YouTube or websites like freeCodeCamp or Codecademy. Start with simple exercises like printing messages or creating basic programs, and build your way up by practicing regularly. Don’t worry if it feels hard at first—everyone starts somewhere!"
}

        ];


        function generateWordsResponse(numWords) {
        const words = [
            "Here", "is", "a", "response", "with", "exactly", "the", "requested", "number", "of", "words",
            "to", "assist", "you", "better", "and", "more", "clearly", "with", "what", "you", "want",
            "to", "know", "or", "ask", "about", "in", "this", "chatbot", "experience", "and", "interaction",
            "that", "you", "are", "having", "right", "now", "with", "me", "and", "I", "hope", "this", "is", "helpful",
            "and", "satisfactory", "for", "your", "needs", "and", "questions", "that", "you", "may", "have",
        ];
        
        const responseWords = words.slice(0, numWords);
        return responseWords.join(" ") + ".";
    }

        document.getElementById('infoButton').addEventListener('click', function() {
            const tooltip = document.getElementById('infoTooltip');
            tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';
        });

        document.getElementById('closeTooltip').addEventListener('click', function() {
            document.getElementById('infoTooltip').style.display = 'none';
        });

        document.getElementById('questionForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const question = document.getElementById('question').value.trim();
            if (question) {
                handleQuestion(question);
                document.getElementById('question').value = ''; // Clear input
            }
        });

        function addMessage(sender, text) {
            const chatContainer = document.getElementById('chat-container');
            const messageElement = document.createElement('div');
            messageElement.className = `chat-message ${sender}`;
            messageElement.innerHTML = `
                            <p>${text}</p>
                        `;
            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to latest message
            return messageElement.querySelector('p'); // Return the paragraph element for updates
        }

        function showLoading() {
            const chatContainer = document.getElementById('chat-container');
            const loadingElement = document.createElement('div');
            loadingElement.id = 'loading';
            loadingElement.className = 'chat-message bot';
            loadingElement.innerHTML = `
                <p><span>.</span><span>.</span><span>.</span></p>
            `;
            chatContainer.appendChild(loadingElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function hideLoading() {
            const loadingElement = document.getElementById('loading');
            if (loadingElement) {
                loadingElement.remove();
            }
        }

        function getKeywordResponse(question) {
            const lowerQuestion = question.toLowerCase();
            for (const entry of keywordResponses) {
                if (entry.keys.some(key => lowerQuestion.includes(key))) {
                    return entry.response;
                }
            }
            return "Sorry, I didn't quite understand that. I'm just an experimental chatbot, not a fully-fledged AI, so my responses are limited. Feel free to ask something else, and I'll do my best to help with the topics I know about!"; // Default response
        }

        function handleQuestion(question) {
            addMessage('user', question); // Add user message
            showLoading(); // Show "thinking" animation

            setTimeout(() => {
                const responseText = getKeywordResponse(question); // Get response based on keywords
                hideLoading(); // Hide loading animation

                const botMessageElement = addMessage('bot', ''); // Add bot message
                displayResponseWordByWord(responseText, botMessageElement); // Display response word by word
            }, 1000); // Simulate a delay for loading
        }

        // Word-by-word display effect
        function displayResponseWordByWord(text, container) {
            const words = text.split(' ');
            let index = 0;
            container.textContent = ''; // Clear the container

            const interval = setInterval(() => {
                if (index < words.length) {
                    container.textContent += words[index] + ' ';
                    index++;
                } else {
                    clearInterval(interval); // Stop the interval after all words are shown
                }
            }, 100); // Adjust the delay for word display speed
        }