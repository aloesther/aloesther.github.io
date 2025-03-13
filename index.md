<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Data Science Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Hi, I'm [Your Name] 👋</h1>
        <p>Data Scientist | Machine Learning | AI</p>
    </header>

    <section>
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I'm a passionate data scientist with experience in machine learning, data analysis, and AI-driven solutions.</p>
    </section>

    <section>
        <h2>Featured Projects</h2>
        <ul>
            <li><a href="https://github.com/your-username/project1">Bitcoin Price Prediction</a> - A deep learning model for cryptocurrency forecasting.</li>
            <li><a href="https://github.com/your-username/project2">Sentiment Analysis</a> - Analyzing tweets to determine user sentiment.</li>
            <li><a href="https://github.com/your-username/project3">Image Classification</a> - AI model for recognizing objects in images.</li>
        </ul>
    </section>

    <section>
        <h2>Latest Blog Posts</h2>
        <ul>
            {% for post in site.posts limit:3 %}
                <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}</li>
            </ul>
        {% endfor %}
    </section>

    <section>
        <h2>Connect with Me</h2>
        <p>
            📧 <a href="mailto:your-email@example.com">Email</a> |
            <a href="https://www.linkedin.com/in/yourprofile/">LinkedIn</a> |
            <a href="https://github.com/your-username">GitHub</a>
        </p>
    </section>
</body>
</html>
