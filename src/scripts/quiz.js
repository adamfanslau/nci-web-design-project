// Author of this script: Adam Fanslau

quizStartButton = document.getElementById("quiz-start-button");
quizContainer = document.getElementById("quiz-container");
quizModalLabel = document.getElementById("quizModalLabel");
quizModalBody = document.getElementById("quizModalBody");


// Question bank for the quiz
// taken from: https://facts.net/internet-facts/
quizQuestions = [
    {
        question: `When was the first ever website published?`,
        possibleAnswers: [
            {
                answer: `1975`,
                isCorrect: false
            },
            {
                answer: `1991`,
                isCorrect: true
            },
            {
                answer: `1989`,
                isCorrect: false
            },
            {
                answer: `1995`,
                isCorrect: false
            }
        ],
        explanation: `The first website went live on 6 August 1991 at a place called the European Organization for Nuclear Research (known as CERN) in Switzerland. This is the research centre where Sir Tim Berners-Lee worked.`
    },
    {
        question: `Whom did the author of the first email in history send it to?`,
        possibleAnswers: [
            {
                answer: `president of the United States`,
                isCorrect: false
            },
            {
                answer: `his mom`,
                isCorrect: false
            },
            {
                answer: `himself`,
                isCorrect: true
            },
            {
                answer: `Tim Berners-Lee`,
                isCorrect: false
            }
        ],
        explanation: `In 1971, American computer programmer Ray Tomlinson sent out an email to himself. As much as his action made history, Tomlinson confessed that he does not remember what he said in the email.`
    },
    {
        question: `What was first-ever spam email trying to sell?`,
        possibleAnswers: [
            {
                answer: `prescription drugs`,
                isCorrect: false
            },
            {
                answer: `sun holidays`,
                isCorrect: false
            },
            {
                answer: `anti-virus software`,
                isCorrect: false
            },
            {
                answer: `computers`,
                isCorrect: true
            }
        ],
        explanation: `Delivered in 1978, Gary Thuerk tried to make his sales by spamming over the ARPANET.`
    },
    {
        question: `Is there more atoms on earth or ip addresses on the internet?`,
        possibleAnswers: [
            {
                answer: `atoms`,
                isCorrect: false
            },
            {
                answer: `ip addresses`,
                isCorrect: true
            }
        ],
        explanation: `Existent IP addresses have a ratio of 100 addresses to 1 atom on the planet. It means that the Earth would go extinct first before ever running out of these virtual identities. You could easily check yours by Googling “what is my IP address.”`
    },
    {
        question: `Why was first webcam invented?`,
        possibleAnswers: [
            {
                answer: `to video chat`,
                isCorrect: false
            },
            {
                answer: `as baby monitor`,
                isCorrect: false
            },
            {
                answer: `to check if a coffee pot is empty`,
                isCorrect: true
            },
            {
                answer: `to monitor road traffic`,
                isCorrect: false
            }
        ],
        explanation: `Back in 1991, Cambridge University of England students grew tired of finding an empty pot every time they get up to fill a coffee cup. They solved the issue by setting up a “webcam” and hooking it to all the desktop computers in the office. To monitor the coffee pot, the webcam would take a picture per second, or what is now known as “a frame per second” or “FPS.” What’s more, is that it presaged the internet.`
    },
    {
        question: `What is the most searched keyword on google so far in 2023?`,
        possibleAnswers: [
            {
                answer: `"youtube"`,
                isCorrect: true
            },
            {
                answer: `"facebook"`,
                isCorrect: false
            },
            {
                answer: `"weather"`,
                isCorrect: false
            },
            {
                answer: `"nci"`,
                isCorrect: false
            }
        ],
        explanation: `‘Youtube’ is the most searched thing on Google, beating other search terms for the third year running. As you probably know, Google owns YouTube, so that’s a big win for the search engine giant.`
    },
    {
        question: `What is the most popular web browser?`,
        possibleAnswers: [
            {
                answer: `Safari`,
                isCorrect: false
            },
            {
                answer: `Firefox`,
                isCorrect: false
            },
            {
                answer: `Chrome`,
                isCorrect: true
            },
            {
                answer: `Internet Explorer`,
                isCorrect: false
            }
        ],
        explanation: `Google Chrome is the dominating web browser at 64.92%. Second on the list is Safari at 15.97%, followed by Firefox at 4.33%, Samsung Internet at 3.29%, UC Browser at 2.94%, and then Opera at 2.34% and Internet Explorer at 1.98%.`
    },
    {
        question: `What is the most expensive domain name ever sold?`,
        possibleAnswers: [
            {
                answer: `google.com`,
                isCorrect: false
            },
            {
                answer: `abc.com`,
                isCorrect: false
            },
            {
                answer: `ncirl.ie`,
                isCorrect: false
            },
            {
                answer: `cars.com`,
                isCorrect: true
            }
        ],
        explanation: `The record for the highest-selling domain name goes to Cars.com. Its worth went up to $872 million.`
    },
    {
        question: `What is the most photographed food on the internet?`,
        possibleAnswers: [
            {
                answer: `irish breakfast`,
                isCorrect: false
            },
            {
                answer: `pizza`,
                isCorrect: true
            },
            {
                answer: `burger`,
                isCorrect: false
            },
            {
                answer: `kebab`,
                isCorrect: false
            }
        ],
        explanation: `The most digitally photographed food on the internet is pizza. It is the most common food displayed by users on their Instagram profiles. With sushi in the second place, the list continues with juicy steak, burgers, and bacon.`
    },
    {
        question: `Which country has the highest internet speed in the world?`,
        possibleAnswers: [
            {
                answer: `Taiwan`,
                isCorrect: true
            },
            {
                answer: `USA`,
                isCorrect: false
            },
            {
                answer: `Ireland`,
                isCorrect: false
            },
            {
                answer: `Australia`,
                isCorrect: false
            }
        ],
        explanation: `The country with the highest internet speed is Taiwan. With an average internet speed of 85.02 Mbps, it managed to beat the previous record-holder which is Singapore.`
    },
    {
        question: `Which country has the slowest internet speed in the world?`,
        possibleAnswers: [
            {
                answer: `North Korea`,
                isCorrect: false
            },
            {
                answer: `Afganistan`,
                isCorrect: false
            },
            {
                answer: `Yemen`,
                isCorrect: true
            },
            {
                answer: `Somalia`,
                isCorrect: false
            }
        ],
        explanation: `The country with the slowest internet speed is Yemen. It only has an average internet speed of 0.38 Mbps.`
    },
    {
        question: `Can you imagine internet without GIFs? But when was it invented?`,
        possibleAnswers: [
            {
                answer: `1978`,
                isCorrect: false
            },
            {
                answer: `1990`,
                isCorrect: false
            },
            {
                answer: `2001`,
                isCorrect: false
            },
            {
                answer: `1987`,
                isCorrect: true
            }
        ],
        explanation: `The GIF format was born in 1987. Steve Wike, a Compuserve engineer, invented the format, and no, it is not pronounced as “jif.”`
    },
    {
        question: `What did the first ever youtube video feature?`,
        possibleAnswers: [
            {
                answer: `Super Bowl`,
                isCorrect: false
            },
            {
                answer: `St.Patrick's Day Parade`,
                isCorrect: false
            },
            {
                answer: `San Diego Zoo`,
                isCorrect: true
            },
            {
                answer: `Eiffel Tower Tour`,
                isCorrect: false
            }
        ],
        explanation: `The first video uploaded on YouTube was published on April 23, 2005. The title of the video was “Me at the zoo,” and features one of the founders of the site, Jawed Karim, at the San Diego Zoo.`
    },
    {
        question: `How many google searches happen every day on average?`,
        possibleAnswers: [
            {
                answer: `7-10 billion`,
                isCorrect: true
            },
            {
                answer: `2-3 trillion`,
                isCorrect: false
            },
            {
                answer: `500-800 million`,
                isCorrect: false
            },
            {
                answer: `3-5 billion`,
                isCorrect: false
            }
        ],
        explanation: `An average day for Google is composed of 7-10 billion search queries. Among those search queries, 15% are first-time searches.`
    },
    {
        question: `How many emploees did Instagram have, when it was purchased for $1 billion by Facebook?`,
        possibleAnswers: [
            {
                answer: `103`,
                isCorrect: false
            },
            {
                answer: `13`,
                isCorrect: true
            },
            {
                answer: `1502`,
                isCorrect: false
            },
            {
                answer: `2`,
                isCorrect: false
            }
        ],
        explanation: `Facebook procured Instagram for $1 billion on an estimate. Back then, the photo-sharing company only had 13 employees.`
    },
    {
        question: `What is the most visited social media platform in the world?`,
        possibleAnswers: [
            {
                answer: `YouTube`,
                isCorrect: false
            },
            {
                answer: `WhatsApp`,
                isCorrect: false
            },
            {
                answer: `Facebook`,
                isCorrect: true
            },
            {
                answer: `TikTok`,
                isCorrect: false
            }
        ],
        explanation: `The most visited social media platform in the world is Facebook. It boasts of more than 2.2 billion active users. Next in line is YouTube and WhatsApp.`
    }
];

// the required randomization for the js game, questions from the
// question bank above will be picked on random with this function
function pickRandomQuizQuestions (noOfQuestions, totalNoOfQuestion) {
    let randomQuestionsArray = [];

    for (i = 0; i < noOfQuestions; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * totalNoOfQuestion);
        } while (randomQuestionsArray.includes(randomIndex));
        randomQuestionsArray.push(randomIndex);
    }

    return randomQuestionsArray;
}

// this funciont takes 3 questions on random from the question bank above
// and returns html markup with the questions and 4 answer options
function generateQuizHtml () {
    let quizHtml = ``;
    const randomQuizQuestions = pickRandomQuizQuestions(3, quizQuestions.length)
    for (i = 0; i < randomQuizQuestions.length; i++) {
        quizHtml += `<h4>${i + 1}) ${quizQuestions[randomQuizQuestions[i]].question}</h4>`;
        quizHtml += `<div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">`;
        for (j = 0; j < quizQuestions[randomQuizQuestions[i]].possibleAnswers.length; j++) {
            const answer = quizQuestions[randomQuizQuestions[i]].possibleAnswers[j].answer
            quizHtml += `<div class="col">`;
            quizHtml += `<div class="quiz-option" id="q-${randomQuizQuestions[i]}-a-${j}" data-bs-toggle="modal" data-bs-target="#quizModal">${answer}</div>`;
            quizHtml += `</div>`;
        }
        quizHtml += `</div>`;
    }
    quizHtml += `<h2 id="quiz-bottom-text">Press [START QUIZ] button for new set of random questions :-)</h2>`;

    return quizHtml;
}

// waiting for user to click [START QUIZ] and then presenting
// 3 random questions each time button is clicked
quizStartButton.addEventListener("click", (e) => {
    quizContainer.innerHTML = generateQuizHtml();

    const quizOptions = document.querySelectorAll(".quiz-option");

    quizOptions.forEach((quizOption) => {
        quizOption.addEventListener("click", (e) => {
        console.log(e.target.id);
        idArray = e.target.id.split(`-`);
        questionIndex = parseInt(idArray[1]);
        answerIndex = parseInt(idArray[3]);
        console.log(quizQuestions[questionIndex]);
        quizModalLabel.innerHTML = ``;
        quizModalBody.innerHTML = ``;
        if (quizQuestions[questionIndex].possibleAnswers[answerIndex].isCorrect) {
            quizModalLabel.innerHTML = `Congrats, right answer!`;
        } else {
            quizModalLabel.innerHTML = `Sorry, wrong answer!`;
            const correctAnswer = quizQuestions[questionIndex].possibleAnswers.find((ans) => ans.isCorrect);
            quizModalBody.innerHTML = `<h6>Correct answer is: ${correctAnswer.answer}</h6>`;
        }
        quizModalBody.innerHTML += `<p>${quizQuestions[questionIndex].explanation}</p>`;
        });
    });
});
