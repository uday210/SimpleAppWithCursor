export const chaptersData = [
    {
        id: 1,
        number: "01",
        title: "Introduction to GenAI",
        duration: "30 mins",
        content: `
            <div class="chapter-content">
                <h2>What is Generative AI?</h2>
                <p class="chapter-intro">Generative AI represents a revolutionary advancement in artificial intelligence that can create new content across various mediums.</p>
                
                <div class="content-section">
                    <h3>Key Concepts</h3>
                    <ul class="concept-list">
                        <li>
                            <span class="concept-icon">🧠</span>
                            <div class="concept-content">
                                <h4>Neural Networks</h4>
                                <p>Complex systems inspired by human brain structure</p>
                            </div>
                        </li>
                        <li>
                            <span class="concept-icon">🔄</span>
                            <div class="concept-content">
                                <h4>Deep Learning</h4>
                                <p>Advanced learning algorithms that improve with data</p>
                            </div>
                        </li>
                        <li>
                            <span class="concept-icon">📊</span>
                            <div class="concept-content">
                                <h4>Pattern Recognition</h4>
                                <p>Identifying and learning from data patterns</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="content-section">
                    <h3>Real-world Applications</h3>
                    <div class="application-grid">
                        <div class="application-card">
                            <span class="app-icon">✍️</span>
                            <h4>Content Creation</h4>
                            <p>Generating text, images, and videos</p>
                        </div>
                        <div class="application-card">
                            <span class="app-icon">💻</span>
                            <h4>Code Generation</h4>
                            <p>Assisting developers with coding tasks</p>
                        </div>
                        <div class="application-card">
                            <span class="app-icon">🎨</span>
                            <h4>Creative Arts</h4>
                            <p>Creating artwork and designs</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        quiz: {
            questions: [
                {
                    question: "What is the primary purpose of Generative AI?",
                    options: [
                        "Creating new content based on patterns",
                        "Storing large amounts of data",
                        "Managing databases",
                        "Processing payments"
                    ],
                    correct: 0
                },
                {
                    question: "Which is NOT a common application of GenAI?",
                    options: [
                        "Writing code",
                        "Creating images",
                        "Physical manufacturing",
                        "Generating text"
                    ],
                    correct: 2
                }
            ]
        }
    },
    // Add more chapters here...
]; 