const chapters = [
    {
        id: 1,
        number: "01",
        title: "Introduction to GenAI",
        content: `
            <div class="text-center mb-12">
                <h1 class="text-3xl font-bold mb-4">What is Generative AI?</h1>
                <p class="text-lg text-gray-600">
                    Generative AI represents a revolutionary advancement in artificial intelligence 
                    that can create new content across various mediums.
                </p>
            </div>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold mb-6">Key Concepts</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="p-6 bg-gray-50 rounded-xl flex gap-4">
                        <div class="text-3xl bg-white p-4 rounded-lg shadow-sm">🧠</div>
                        <div>
                            <h3 class="font-semibold mb-2">Neural Networks</h3>
                            <p class="text-gray-600">Complex systems inspired by human brain structure</p>
                        </div>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-xl flex gap-4">
                        <div class="text-3xl bg-white p-4 rounded-lg shadow-sm">🔄</div>
                        <div>
                            <h3 class="font-semibold mb-2">Deep Learning</h3>
                            <p class="text-gray-600">Advanced algorithms that improve with data</p>
                        </div>
                    </div>
                </div>
            </section>
        `,
        quiz: {
            question: "What is the primary purpose of Generative AI?",
            options: [
                "Creating new content based on patterns",
                "Storing large amounts of data",
                "Managing databases"
            ],
            correct: 0
        }
    },
    {
        id: 2,
        number: "02",
        title: "Applications of GenAI",
        content: `
            <div class="text-center mb-12">
                <h1 class="text-3xl font-bold mb-4">Applications of GenAI</h1>
                <p class="text-lg text-gray-600">
                    GenAI has numerous real-world applications across various industries.
                </p>
            </div>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold mb-6">Popular Use Cases</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="p-6 bg-gray-50 rounded-xl flex gap-4">
                        <div class="text-3xl bg-white p-4 rounded-lg shadow-sm">✍️</div>
                        <div>
                            <h3 class="font-semibold mb-2">Content Creation</h3>
                            <p class="text-gray-600">Generate text, images, and videos</p>
                        </div>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-xl flex gap-4">
                        <div class="text-3xl bg-white p-4 rounded-lg shadow-sm">💻</div>
                        <div>
                            <h3 class="font-semibold mb-2">Code Generation</h3>
                            <p class="text-gray-600">Assist with programming tasks</p>
                        </div>
                    </div>
                </div>
            </section>
        `,
        quiz: {
            question: "Which is a common application of GenAI?",
            options: [
                "Content Creation",
                "Database Management",
                "Network Security"
            ],
            correct: 0
        }
    }
];

class App {
    constructor() {
        this.currentChapter = 0;
        this.initializeElements();
        this.bindEvents();
        this.loadChapter(0);
    }

    initializeElements() {
        this.chapterLinks = document.querySelectorAll('.chapter-list a');
        this.mainContent = document.querySelector('.max-w-3xl');
        this.chapterLabel = document.querySelector('header span');
        this.chapterTitle = document.querySelector('header h2');
        this.quizModal = document.querySelector('.fixed');
        this.quizBtn = document.querySelector('header button');
        this.closeQuizBtn = document.querySelector('.modal-close');
    }

    bindEvents() {
        // Chapter navigation
        this.chapterLinks.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadChapter(index);
            });
        });

        // Quiz functionality
        this.quizBtn.addEventListener('click', () => this.openQuiz());
        document.querySelector('.modal-close').addEventListener('click', () => this.closeQuiz());
    }

    loadChapter(index) {
        this.currentChapter = index;
        const chapter = chapters[index];

        // Update content
        this.mainContent.innerHTML = chapter.content;
        this.chapterLabel.textContent = `Chapter ${chapter.number}`;
        this.chapterTitle.textContent = chapter.title;

        // Update active state
        this.chapterLinks.forEach((link, i) => {
            if (i === index) {
                link.classList.add('bg-indigo-600', 'text-white');
                link.classList.remove('border', 'border-gray-200');
            } else {
                link.classList.remove('bg-indigo-600', 'text-white');
                link.classList.add('border', 'border-gray-200');
            }
        });
    }

    openQuiz() {
        const chapter = chapters[this.currentChapter];
        const quizContent = document.querySelector('.quiz-content');
        
        quizContent.innerHTML = `
            <h4 class="font-medium mb-4">${chapter.quiz.question}</h4>
            <div class="space-y-2">
                ${chapter.quiz.options.map((option, index) => `
                    <button onclick="app.checkAnswer(${index})" 
                            class="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-indigo-600">
                        ${option}
                    </button>
                `).join('')}
            </div>
        `;
        
        this.quizModal.classList.remove('hidden');
    }

    closeQuiz() {
        this.quizModal.classList.add('hidden');
    }

    checkAnswer(index) {
        const chapter = chapters[this.currentChapter];
        const isCorrect = index === chapter.quiz.correct;
        
        if (isCorrect) {
            alert('Correct! 🎉');
            this.closeQuiz();
        } else {
            alert('Try again!');
        }
    }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new App();
}); 