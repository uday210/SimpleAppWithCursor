const contentData = {
    "courseDuration": "2 hours",
    "chapters": [
        {
            "id": "foundations",
            "number": "01",
            "title": "Foundations of Generative AI",
            "duration": "30 mins",
            "sections": [
                {
                    "title": "What is Generative AI?",
                    "content": "Generative AI refers to artificial intelligence systems that can create new content, including text, images, music, and more. These systems learn patterns from existing data to generate new, original content that's similar to what they were trained on.",
                    "keyConcepts": [
                        "Machine Learning Models",
                        "Neural Networks",
                        "Training Data",
                        "Pattern Recognition"
                    ],
                    "resources": [
                        {
                            "title": "GPT-4 Technical Report",
                            "url": "https://arxiv.org/abs/2303.04226"
                        },
                        {
                            "title": "DALL-E Explained",
                            "url": "https://openai.com/blog/dall-e/"
                        }
                    ]
                }
            ],
            "quiz": {
                "question": "What is the main purpose of Generative AI?",
                "options": [
                    "To create new content based on learned patterns",
                    "To store large amounts of data",
                    "To connect to the internet",
                    "To play video games"
                ],
                "correct": 0
            }
        },
        {
            "id": "types",
            "number": "02",
            "title": "Types of Generative AI Models",
            "duration": "45 mins",
            "sections": [
                {
                    "title": "Common Generative AI Architectures",
                    "content": "There are several key architectures used in Generative AI, each with its own strengths and applications. The most prominent ones include Transformers, GANs, and Diffusion Models.",
                    "keyConcepts": [
                        "Transformer Architecture",
                        "Generative Adversarial Networks",
                        "Diffusion Models",
                        "Variational Autoencoders"
                    ],
                    "resources": [
                        {
                            "title": "Understanding Transformers",
                            "url": "https://arxiv.org/abs/1706.03762"
                        },
                        {
                            "title": "Introduction to GANs",
                            "url": "https://arxiv.org/abs/1406.2661"
                        }
                    ]
                }
            ]
        },
        {
            "id": "applications",
            "number": "03",
            "title": "Real-world Applications",
            "duration": "45 mins",
            "sections": [
                {
                    "title": "Practical Applications of GenAI",
                    "content": "Generative AI has found numerous applications across industries, from creative tasks to scientific research. Let's explore some of the most impactful use cases.",
                    "keyConcepts": [
                        "Content Creation",
                        "Code Generation",
                        "Scientific Discovery",
                        "Design Automation"
                    ],
                    "resources": [
                        {
                            "title": "GitHub Copilot",
                            "url": "https://github.com/features/copilot"
                        },
                        {
                            "title": "Midjourney Art",
                            "url": "https://www.midjourney.com"
                        }
                    ]
                }
            ]
        }
    ]
};

class LearningApp {
    constructor() {
        this.currentSection = 0;
        this.score = 0;
        this.answeredQuestions = new Set();
        this.content = contentData;
        this.initializeElements();
        this.bindEvents();
        this.loadContent();
    }

    initializeElements() {
        this.elements = {
            sidebar: document.querySelector('.sidebar'),
            chapterList: document.getElementById('chapter-list'),
            contentContainer: document.getElementById('content-container'),
            quizContainer: document.getElementById('quiz-container'),
            quizToggle: document.getElementById('quiz-toggle'),
            closeQuiz: document.querySelector('.close-quiz'),
            progressRing: document.querySelector('.progress-ring-circle'),
            progressPercentage: document.getElementById('progress-percentage'),
            timeline: document.querySelector('.timeline'),
            mainContent: document.querySelector('.main-content')
        };

        // Initialize progress ring
        const radius = 57;
        const circumference = radius * 2 * Math.PI;
        this.elements.progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        this.elements.progressRing.style.strokeDashoffset = circumference;
    }

    bindEvents() {
        this.elements.quizToggle.addEventListener('click', () => this.toggleQuiz());
        this.elements.closeQuiz.addEventListener('click', () => this.toggleQuiz());
        document.getElementById('sidebar-open').addEventListener('click', () => this.toggleSidebar());
        document.getElementById('sidebar-close').addEventListener('click', () => this.toggleSidebar());
    }

    toggleSidebar() {
        this.elements.sidebar.classList.toggle('open');
    }

    toggleQuiz() {
        this.elements.quizContainer.style.display = 
            this.elements.quizContainer.style.display === 'none' ? 'flex' : 'none';
    }

    loadContent() {
        // Clear existing content
        this.elements.chapterList.innerHTML = '';
        
        // Generate chapter list
        this.content.chapters.forEach((chapter, index) => {
            const li = document.createElement('li');
            li.className = `chapter-item ${index === this.currentSection ? 'active' : ''}`;
            li.setAttribute('data-index', index);
            li.innerHTML = `
                <span class="chapter-number">${chapter.number}</span>
                <h3>${chapter.title}</h3>
                <span class="duration">${chapter.duration}</span>
            `;
            li.addEventListener('click', () => this.navigateToChapter(index));
            this.elements.chapterList.appendChild(li);
        });

        // Load initial content
        this.updateContent();
    }

    updateContent() {
        // Update content and progress
        const chapter = this.content.chapters[this.currentSection];
        
        // Update main content
        this.elements.contentContainer.innerHTML = this.generateChapterHTML(chapter);
        
        // Update active chapter in sidebar
        const chapterItems = this.elements.chapterList.querySelectorAll('.chapter-item');
        chapterItems.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentSection);
        });

        // Update progress
        this.updateProgress();
    }

    generateChapterHTML(chapter) {
        if (!chapter || !chapter.sections || !chapter.sections[0]) {
            return '<div class="chapter-container"><p>Content not available</p></div>';
        }

        const section = chapter.sections[0];
        
        return `
            <div class="chapter-container">
                <div class="chapter-header">
                    <span class="chapter-number">${chapter.number}</span>
                    <h2>${chapter.title}</h2>
                </div>
                
                <div class="section">
                    <h3>${section.title}</h3>
                    <p>${section.content}</p>
                    
                    ${section.keyConcepts ? `
                        <div class="key-concepts">
                            <h4>🔑 Key Concepts</h4>
                            <ul>
                                ${section.keyConcepts.map(concept => `<li>${concept}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    ${section.resources ? `
                        <div class="resources">
                            <h4>📚 Additional Resources</h4>
                            <ul>
                                ${section.resources.map(resource => 
                                    `<li><a href="${resource.url}" target="_blank">${resource.title}</a></li>`
                                ).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    updateProgress() {
        const progress = ((this.currentSection + 1) / this.content.chapters.length) * 100;
        
        // Update progress ring
        const radius = 57;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (progress / 100) * circumference;
        this.elements.progressRing.style.strokeDashoffset = offset;
        
        // Update percentage text
        this.elements.progressPercentage.textContent = `${Math.round(progress)}%`;
        
        // Update timeline
        this.elements.timeline.style.width = `${progress}%`;
    }

    navigateToChapter(index) {
        if (index >= 0 && index < this.content.chapters.length) {
            this.currentSection = index;
            this.updateContent();
            
            // Close sidebar on mobile after navigation
            if (window.innerWidth <= 768) {
                this.toggleSidebar();
            }
        }
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new LearningApp();
}); 