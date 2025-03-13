// Get the URL parameter (?post=1)
const urlParams = new URLSearchParams(window.location.search);
const postID = urlParams.get("post");

// Blog posts data
const blogPosts = {
  "1": {
    title: "The Importance of Web Development",
    image: "images/web-development.jpg",
    content:  `
       <br>
       <br>
       <br>
   <h4>Introduction</h4>
<p>In today’s digital age, having an online presence is no longer optional—it’s a necessity. Whether you are a business, an organization, or an individual, a well-structured and visually appealing website plays a crucial role in establishing credibility, attracting customers, and fostering engagement.</p>
<p>Web development is the backbone of the internet. It involves designing, coding, and maintaining websites to ensure they are functional, responsive, and user-friendly. Without effective web development, even the best ideas, businesses, and brands may struggle to gain traction in an increasingly competitive digital landscape.</p>
<p>From small personal blogs to large-scale e-commerce platforms, web development ensures a seamless digital experience for users. This blog explores why web development is vital, how it impacts businesses and users, and the future trends shaping the industry.</p>

<h4>Enhancing User Experience</h4>
<p>One of the primary goals of web development is to enhance user experience. A poorly designed website can drive visitors away, while a well-developed one encourages engagement and retention. Some key aspects that contribute to a positive user experience include:</p>

<h5>Responsiveness</h5>
<p>Modern web development ensures that websites are responsive, meaning they automatically adjust to different screen sizes and devices. Whether accessed from a desktop, tablet, or smartphone, a responsive website provides a seamless browsing experience.</p>

<h5>Fast Loading Speed</h5>
<p>Studies show that users expect websites to load within three seconds. A slow-loading website leads to increased bounce rates, meaning visitors leave before engaging with the content. Optimizing images, reducing server response time, and using caching techniques help improve loading speed.</p>

<h5>Intuitive Navigation</h5>
<p>Users should be able to find what they are looking for quickly and effortlessly. A well-structured website features clear menus, easy-to-use search bars, and logically organized content, making navigation smooth and frustration-free.</p>

<h5>Interactivity</h5>
<p>Engaging websites incorporate interactive elements such as animations, videos, forms, and chat support. These features make browsing more enjoyable and increase user retention.</p>

<h5>Accessibility</h5>
<p>Web development also focuses on making websites accessible to all users, including those with disabilities. Features such as screen reader compatibility, keyboard navigation, and alternative text for images ensure inclusivity.</p>

<img src="images/web-development1.jpg" alt="Web Development" class="img-fluid">

<br><br><br>

<h4>Business Growth & Online Success</h4>
<p>For businesses, a website is often the first point of interaction with potential customers. A well-developed website can significantly influence a company’s growth and success in the following ways:</p>

<h5>Attracting Customers</h5>
<p>Search Engine Optimization (SEO) is a crucial part of web development. Optimized websites rank higher on search engines like Google, making it easier for customers to discover businesses. With effective SEO strategies, businesses can attract more traffic and increase conversions.</p>

<h5>Strengthening Brand Identity</h5>
<p>A website serves as a digital storefront. A well-designed website establishes credibility and reflects the company’s values and professionalism. Consistent branding, visually appealing layouts, and compelling content help businesses stand out.</p>

<h5>Enhancing Customer Interaction</h5>
<p>Modern websites are designed to foster customer engagement. Features such as live chat support, AI-powered chatbots, personalized recommendations, and contact forms make it easier for businesses to interact with their audience in real time.</p>

<h5>Driving E-Commerce Success</h5>
<p>Online shopping has become a dominant industry, and businesses without an online store risk being left behind. E-commerce platforms like <strong>Amazon, Shopify, and WooCommerce</strong> demonstrate how effective web development can facilitate seamless online transactions, enhance user experiences, and drive sales.</p>

<h5>Social Media Integration</h5>
<p>Web development also plays a role in integrating social media platforms. Adding social media sharing buttons, embedding feeds, and linking accounts help businesses expand their reach and engage with a wider audience.</p>

<h4>Security & Future Trends</h4>
<p>With the increasing number of cyber threats, security is a top priority in web development. Protecting user data and ensuring website security is essential for maintaining trust and credibility.</p>

<h5>SSL Certificates & HTTPS</h5>
<p>Secure websites use SSL certificates and HTTPS encryption to protect data transmission between users and servers. This prevents data breaches and builds trust among visitors.</p>

<h5>Regular Updates & Maintenance</h5>
<p>Websites must be regularly updated to patch security vulnerabilities and improve functionality. Developers implement security updates, fix bugs, and optimize performance to ensure a smooth experience.</p>

<h5>Data Protection & Privacy</h5>
<p>With regulations like GDPR and CCPA, businesses must prioritize user data protection. Secure login methods, encryption, and strict privacy policies help safeguard user information.</p>

<h5>Emerging Trends in Web Development</h5>
<p>Web development is constantly evolving. Some of the latest trends shaping the future include:</p>

<ul>
  <li><strong>Artificial Intelligence (AI) Integration:</strong> AI-powered chatbots, voice assistants, and automated customer support are transforming web interactions.</li>
  <li><strong>Progressive Web Apps (PWAs):</strong> PWAs combine the best features of mobile apps and websites, offering fast loading speeds and offline functionality.</li>
  <li><strong>Voice Search Optimization:</strong> With the rise of smart assistants like Alexa and Google Assistant, optimizing websites for voice search is becoming essential.</li>
  <li><strong>Dark Mode & Minimalist UI:</strong> More websites are adopting dark mode options and clean, clutter-free designs for better user experiences.</li>
  <li><strong>Blockchain Integration:</strong> Blockchain technology is being used for secure transactions, decentralized applications, and digital identity verification.</li>
</ul>

<h4>Conclusion</h4>
<p>Web development is more than just coding a website—it’s about creating a digital ecosystem that enhances user experiences, drives business success, and ensures security. A well-developed website helps businesses establish credibility, engage with customers, and stay ahead in the competitive digital world.</p>
<p>As technology continues to evolve, web development will remain at the forefront of innovation, shaping how we interact with the internet and digital services. Whether you are a business owner, developer, or entrepreneur, staying updated with the latest web development trends is key to long-term success.</p>
<p>🚀 <em>Invest in web development today and build a future-ready digital presence!</em></p>
  `,
    author: {
      name: "Mehedi Hasan",
      description: "A passionate web developer and tech enthusiast.",
      image: "images/mehedi.png",
      date: "March 11, 2025"
    },
    tags: ["Web Development", "Technology", "Frontend"],
    tagCloud: ["House", "Office", "Building", "Land", "Table", "Interior", "Exterior", "Industrial"],
    categories: [
      { name: "Interior Design", count: 12 },
      { name: "Exterior Design", count: 22 },
      { name: "Industrial Design", count: 37 },
      { name: "Landscape Design", count: 42 }
    ],
    comments: [
      { id: 1, name: "Imtiaz Ahmed", date: "March 11, 2025", message: "Great post! Very informative." },
      { id: 2, name: "Rafsan Inan", date: "June 22, 2019", message: "I love how you explained the importance of responsiveness." },
      { id: 3, name: "Sarah Khan", date: "March 12, 2025", message: "I love how you explained the importance of web development in business growth!" },
      { id: 4, name: "David Miller", date: "March 13, 2025", message: "Very well written! The section on security trends was especially insightful." },
      { id: 5, name: "Emily Roberts", date: "March 14, 2025", message: "Web development is evolving fast! Great to see a detailed explanation." },
      { id: 6, name: "Amit Patel", date: "March 15, 2025", message: "This article is a great starting point for beginners in web development!" }

    ]
  },
  "2": {
    title: "AI in the Modern World",
    image: "images/ai.jpg",
    content: `
       <br>
       <br>
       <br>
      <h4>Introduction</h4>
      <p>Artificial Intelligence (AI) is one of the most transformative technologies of the 21st century, revolutionizing industries, enhancing automation, and reshaping the way we interact with technology. AI systems are capable of performing tasks that typically require human intelligence, such as problem-solving, decision-making, language understanding, and visual perception.</p>
      <p>From self-driving cars and virtual assistants to predictive analytics and robotics, AI has become an essential part of our modern world. This blog explores how AI is impacting various sectors, the challenges it brings, and what the future holds.</p>

      <h4>The Impact of AI on Various Industries</h4>
      <p>AI is making significant advancements across numerous industries, leading to increased efficiency, better decision-making, and innovative applications. Here are some of the most affected sectors:</p>
      
      <h5>Healthcare</h5>
      <p>AI is transforming healthcare by assisting in diagnosis, treatment recommendations, and patient care. AI-powered applications such as IBM Watson and Google's DeepMind can analyze medical data, detect patterns, and suggest treatments. Some key AI applications in healthcare include:</p>
      <ul>
        <li><strong>Medical Imaging:</strong> AI-driven algorithms analyze X-rays, MRIs, and CT scans to detect diseases like cancer with high accuracy.</li>
        <li><strong>Predictive Analytics:</strong> AI predicts disease outbreaks and identifies at-risk patients by analyzing historical health data.</li>
        <li><strong>Robotic Surgery:</strong> AI-assisted robots perform minimally invasive surgeries with greater precision.</li>
        <li><strong>Personalized Treatment:</strong> AI tailors treatment plans based on a patient's genetic information and medical history.</li>
      </ul>
       
       <img src="images/ai1.jpg" alt="AI" class="img-fluid">

       <br>
       <br>
       <br>
      <h5>Finance</h5>
      <p>AI is widely used in the financial sector to improve decision-making, detect fraud, and automate trading. AI-driven technologies in finance include:</p>
      <ul>
        <li><strong>Algorithmic Trading:</strong> AI-powered trading bots analyze market trends and execute trades in real time.</li>
        <li><strong>Fraud Detection:</strong> AI identifies fraudulent transactions by monitoring spending patterns and detecting anomalies.</li>
        <li><strong>Chatbots & Virtual Assistants:</strong> AI-driven financial advisors help customers manage their finances and investments.</li>
        <li><strong>Risk Assessment:</strong> AI evaluates loan applications and credit risks using predictive analytics.</li>
      </ul>

      <h5>Retail & E-Commerce</h5>
      <p>AI is enhancing customer experiences and optimizing operations in the retail industry. Some major applications include:</p>
      <ul>
        <li><strong>Personalized Recommendations:</strong> AI analyzes user behavior and preferences to suggest products on platforms like Amazon and Netflix.</li>
        <li><strong>Chatbots & Customer Support:</strong> AI-driven virtual assistants handle customer inquiries and complaints efficiently.</li>
        <li><strong>Inventory Management:</strong> AI predicts demand and manages supply chains more effectively.</li>
        <li><strong>Visual Search:</strong> AI-powered image recognition allows users to search for products by uploading photos.</li>
      </ul>

      <h4>AI and Automation</h4>
      <p>Automation powered by AI is eliminating repetitive tasks and improving productivity across various domains. AI-driven automation is used in:</p>
      <ul>
        <li><strong>Manufacturing:</strong> AI-powered robots assemble products, inspect quality, and optimize supply chains.</li>
        <li><strong>Transportation:</strong> Self-driving cars and AI-assisted traffic management systems improve road safety and efficiency.</li>
        <li><strong>Smart Homes:</strong> AI-powered smart devices control lighting, security, and appliances through voice commands.</li>
        <li><strong>Human Resources:</strong> AI automates resume screening, employee onboarding, and performance evaluation.</li>
      </ul>

      <h4>Ethical Concerns & Challenges</h4>
      <p>Despite its advantages, AI also raises ethical concerns and challenges that must be addressed:</p>
      <ul>
        <li><strong>Bias in AI Algorithms:</strong> AI systems can inherit biases from their training data, leading to unfair decisions.</li>
        <li><strong>Job Displacement:</strong> AI-driven automation may replace human jobs, requiring workforce reskilling.</li>
        <li><strong>Privacy Concerns:</strong> AI-based surveillance and data collection raise privacy and security issues.</li>
        <li><strong>AI Ethics & Regulations:</strong> The development of ethical AI frameworks is necessary to prevent misuse.</li>
      </ul>

      <h4>The Future of AI</h4>
      <p>AI is evolving rapidly, with new innovations emerging in multiple fields. Some key trends shaping the future of AI include:</p>
      <ul>
        <li><strong>General AI:</strong> The pursuit of artificial general intelligence (AGI) aims to create machines that can perform any intellectual task a human can.</li>
        <li><strong>AI & Creativity:</strong> AI is being used to generate art, music, and creative writing.</li>
        <li><strong>Neural Interfaces:</strong> AI-driven brain-computer interfaces (BCIs) allow humans to control devices with their thoughts.</li>
        <li><strong>Quantum AI:</strong> The integration of quantum computing and AI could lead to unprecedented computational power.</li>
      </ul>

      <h4>Conclusion</h4>
      <p>Artificial Intelligence is reshaping the world as we know it, revolutionizing industries, automating processes, and enhancing our daily lives. However, it is crucial to develop AI responsibly, ensuring it remains ethical, unbiased, and beneficial to all. As AI continues to advance, we must embrace its potential while addressing the challenges it presents.</p>
      <p>🚀 <em>Stay informed and be part of the AI-driven future!</em></p>
    `,
    author: {
      name: "IShowSpeed",
      description: "AI researcher and developer.",
      image: "images/ishow.avif",
      date: "March 15, 2025"
    },
    tags: ["AI", "Machine Learning", "Automation","Deep Learning", "Neural Networks","Artificial Intelligence"],
    tagCloud: ["Neural Networks", "Deep Learning", "NLP", "AI Ethics","Supervised Learning","Unsupervised Learning","Federated Learning","AI in Healthcare"],
    categories: [
      { name: "Artificial Intelligence", count: 15 },
      { name: "Technology", count: 20 },
      { name: "Machine Learning", count: 18 },
      { name: "Deep Learning", count: 12 },
      { name: "AI Ethics", count: 10 },
      { name: "Data Science", count: 25 }
    ],    
    comments: [
      { id: 3, name: "Jane Doe", date: "March 16, 2025", message: "AI is the future!" },
      { id: 4, name: "Imtiaz Ahmed", date: "March 17, 2025", message: "Great insights! AI is revolutionizing every industry." },
      { id: 5, name: "Sophia Carter", date: "March 18, 2025", message: "I love how AI is improving automation and efficiency." },
      { id: 6, name: "David Johnson", date: "March 19, 2025", message: "Interesting read! What are your thoughts on AI ethics?" },
      { id: 7, name: "Emily White", date: "March 20, 2025", message: "AI-powered chatbots are changing customer service forever!" },
      { id: 8, name: "Michael Brown", date: "March 21, 2025", message: "The potential of AI in healthcare is just amazing!" },
      { id: 9, name: "Rahul Sharma", date: "March 22, 2025", message: "AI and machine learning will shape the future workforce." },
      { id: 10, name: "Alice Green", date: "March 23, 2025", message: "Exciting times ahead! Can't wait to see AI advancements in robotics." }
    ]    
  },
  "3": {
    title: "Cybersecurity in 2025",
    image: "images/Cyber.jpeg",

    content: `
     <br>
     <br>
     <br>
    <h4>Introduction</h4>
      <p>As technology advances, so do cyber threats. Cybersecurity has become a critical aspect of the digital world, protecting individuals, businesses, and governments from cyberattacks. In 2025, cybersecurity is more vital than ever, with AI-driven threats, ransomware attacks, and data breaches becoming increasingly sophisticated.</p>
      
      <h4>The Growing Importance of Cybersecurity</h4>
      <p>With digital transformation accelerating across industries, the need for robust cybersecurity measures has never been higher. Key reasons why cybersecurity is essential in 2025 include:</p>
      <ul>
        <li><strong>Increased Cyber Threats:</strong> Cybercriminals use AI and automation to launch more advanced attacks.</li>
        <li><strong>Rise of Remote Work:</strong> More employees working remotely increases vulnerability to phishing and hacking.</li>
        <li><strong>Internet of Things (IoT):</strong> Connected devices create more entry points for cyber threats.</li>
        <li><strong>Data Privacy Concerns:</strong> Protecting sensitive personal and financial information is a top priority.</li>
      </ul>

      <h4>Cyber Threats in 2025</h4>
      <p>Cybersecurity experts predict that the following threats will be prevalent in 2025:</p>

      <h5>AI-Powered Cyber Attacks</h5>
      <p>Artificial Intelligence (AI) is being used by hackers to automate attacks, crack passwords, and bypass security systems.</p>

      <h5>Ransomware Evolution</h5>
      <p>Ransomware attacks are becoming more advanced, targeting large enterprises, hospitals, and even governments.</p>

      <h5>Deepfake Scams</h5>
      <p>Cybercriminals use AI-generated deepfakes to impersonate executives and steal sensitive information.</p>

      <h5>Cloud Security Risks</h5>
      <p>With businesses moving to the cloud, improper configurations and weak security measures pose significant risks.</p>

      <h4>Emerging Cybersecurity Technologies</h4>
      <p>As threats evolve, so do security solutions. Some key cybersecurity innovations in 2025 include:</p>
      <ul>
        <li><strong>AI-Driven Security:</strong> AI is used to detect anomalies and prevent cyber threats in real-time.</li>
        <li><strong>Zero Trust Security:</strong> A "never trust, always verify" approach ensures strict identity authentication.</li>
        <li><strong>Blockchain Security:</strong> Blockchain enhances data integrity and prevents unauthorized access.</li>
        <li><strong>Quantum Cryptography:</strong> Advanced encryption methods make hacking nearly impossible.</li>
        <li><strong>Biometric Authentication:</strong> Face recognition, fingerprint scanning, and voice authentication improve security.</li>
      </ul>
  
        <img src="images/Cyber.webp" alt="AI" class="img-fluid">

      <h4>Cybersecurity Best Practices</h4>
      <p>To stay protected in 2025, individuals and businesses should follow these best practices:</p>
      <ul>
        <li><strong>Use Strong Passwords:</strong> Implement multi-factor authentication (MFA) for extra security.</li>
        <li><strong>Keep Software Updated:</strong> Regular updates prevent hackers from exploiting vulnerabilities.</li>
        <li><strong>Educate Employees:</strong> Cybersecurity training reduces risks from phishing and social engineering.</li>
        <li><strong>Backup Data Regularly:</strong> Keeping backups helps recover from ransomware attacks.</li>
        <li><strong>Monitor Network Activity:</strong> AI-driven tools detect unusual behavior and potential threats.</li>
      </ul>

      <h4>The Future of Cybersecurity</h4>
      <p>Looking ahead, cybersecurity will continue evolving. Governments will enforce stricter regulations, companies will invest more in security infrastructure, and AI will play a crucial role in defense mechanisms.</p>

      <h4>Conclusion</h4>
      <p>Cybersecurity in 2025 is not just an option—it’s a necessity. With the increasing sophistication of cyber threats, businesses and individuals must stay informed and proactive. By adopting advanced security measures and staying vigilant, we can safeguard the digital world.</p>
      <p>🔐 <em>Stay safe, stay secure, and embrace the future of cybersecurity!</em></p>
     `,
    author: {
      name: "Donald J Trump",
      description: "Cybersecurity expert specializing in network security and ethical hacking.",
      image: "images/donald.webp",
      date: "March 20, 2025"
    },
    tags: [
      "Cybersecurity", "Data Protection", "Hacking", "Threat Intelligence",
      "Cloud Security", "Network Security", "Ransomware", "Encryption"
    ],
    tagCloud: [
      "Network Security", "Ethical Hacking", "Encryption", "Firewalls",
      "Cyber Threats", "Zero Trust", "Quantum Security", "AI in Security"
    ],
    categories: [
      { name: "Cybersecurity", count: 18 },
      { name: "IT Security", count: 25 },
      { name: "Network Protection", count: 12 },
      { name: "Cloud Security", count: 15 },
      { name: "Data Privacy", count: 10 }
    ],
    comments: [
      { id: 8, name: "Alice Johnson", date: "March 21, 2025", message: "Cybersecurity is more important than ever!" },
      { id: 9, name: "Robert Williams", date: "March 22, 2025", message: "AI-driven attacks are scary but fascinating at the same time." },
      { id: 10, name: "Sophia Lee", date: "March 23, 2025", message: "Great article! I learned a lot about Zero Trust security." },
      { id: 11, name: "Michael Brown", date: "March 24, 2025", message: "Ransomware attacks are getting worse. We need better security strategies." },
      { id: 12, name: "Emily Davis", date: "March 25, 2025", message: "Thanks for sharing! I’ll make sure to enable multi-factor authentication." },
      { id: 13, name: "Michael Scott", date: "March 26, 2025", message: "Great insights on cybersecurity trends!" },
      { id: 14, name: "David Lee", date: "March 27, 2025", message: "I think blockchain security will be a game-changer!" },
      { id: 15, name: "Sarah Connor", date: "March 28, 2025", message: "Cybersecurity professionals have a big responsibility ahead!" },
      { id: 16, name: "Tom Hardy", date: "March 29, 2025", message: "Every company needs to implement zero-trust security models." }
    ]
  }
};

// Check if the blog post exists
if (blogPosts[postID]) {
  const post = blogPosts[postID];

  // Update Title, Image, and Content
  document.getElementById("blog-title").innerText = post.title;
  document.getElementById("blog-image").src = post.image;
  document.getElementById("blog-image").alt = post.title;
  document.getElementById("blog-content").innerHTML = post.content;

  // Update Author Section
  document.getElementById("author-section").innerHTML = `
    <div class="bio mr-5">
      <img src="${post.author.image}" alt="${post.author.name}" class="img-fluid mb-4">
    </div>
    <div class="desc">
      <h3>${post.author.name}</h3>
      <p><strong>Date:</strong> ${post.author.date}</p>
      <p>${post.author.description}</p>
    </div>
  `;

  // Update Tags Section
  document.getElementById("blog-tags").innerHTML = post.tags
    .map(tag => `<a href="#" class="tag-cloud-link">${tag}</a>`)
    .join("");

  // Update Tag Cloud
  document.getElementById("tag-cloud").innerHTML = post.tagCloud
    .map(tag => `<a href="#" class="tag-cloud-link">${tag}</a>`)
    .join("");

  // Update Categories Section
  document.getElementById("blog-categories").innerHTML = post.categories
    .map(category => `<li style="display: flex; justify-content: space-between;"><a href="#">${category.name}</a> <span>(${category.count})</span></li>`)
    .join("");

  // Load Comments from Local Storage
  function updateCommentsSection() {
    const postID = new URLSearchParams(window.location.search).get("post");
    if (!blogPosts[postID]) return;

    // Retrieve comments from localStorage
    const storedComments = localStorage.getItem(`comments-${postID}`);
    if (storedComments) {
      blogPosts[postID].comments = JSON.parse(storedComments);
    }

    const commentSection = document.getElementById("comments-section");
    if (blogPosts[postID].comments.length > 0) {
      let commentHTML = `<h3 class="mb-5">${blogPosts[postID].comments.length} Comments</h3><ul class="comment-list">`;
      blogPosts[postID].comments.forEach(comment => {
        commentHTML += `
          <li class="comment" id="comment-${comment.id}">
            <div class="vcard bio"><img src="images/person_1.jpg" alt="User Image"></div>
            <div class="comment-body">
              <h3>${comment.name}</h3>
              <div class="meta">${comment.date}</div>
              <p>${comment.message}</p>
              <p>
                <a href="#" class="reply">Reply</a>
                <button class="btn btn-danger btn-sm delete-comment" data-id="${comment.id}">Delete</button>
              </p>
            </div>
          </li>
        `;
      });
      commentHTML += `</ul>`;
      commentSection.innerHTML = commentHTML;

      // Attach event listeners to delete buttons
      document.querySelectorAll(".delete-comment").forEach(button => {
        button.addEventListener("click", function () {
          const commentId = parseInt(this.getAttribute("data-id"));
          deleteComment(commentId);
        });
      });
    } else {
      commentSection.innerHTML = `<h3>No comments yet. Be the first to comment!</h3>`;
    }
  }

  updateCommentsSection();

  // Delete a Comment
  function deleteComment(commentId) {
    const postID = new URLSearchParams(window.location.search).get("post");
    if (!blogPosts[postID]) return;

    // Remove comment from array
    blogPosts[postID].comments = blogPosts[postID].comments.filter(comment => comment.id !== commentId);

    // Update localStorage
    localStorage.setItem(`comments-${postID}`, JSON.stringify(blogPosts[postID].comments));

    updateCommentsSection(); // Refresh comments without reloading
  }

  // ✅ Prevent Form Submission from Reloading the Page
  document.getElementById("comment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // 🚀 This prevents page refresh!

    const name = document.getElementById("comment-name").value.trim();
    const email = document.getElementById("comment-email").value.trim();
    const website = document.getElementById("comment-website").value.trim();
    const message = document.getElementById("comment-message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields!");
      return;
    }

    // Create a new comment
    const newComment = {
      id: Date.now(),
      name: name,
      date: new Date().toLocaleDateString(),
      message: message
    };

    // Add comment to post
    blogPosts[postID].comments.push(newComment);

    // Save to localStorage
    localStorage.setItem(`comments-${postID}`, JSON.stringify(blogPosts[postID].comments));

    // Clear form fields
    document.getElementById("comment-form").reset();

    // Update the comments section dynamically
    updateCommentsSection();
  });

} else {
  // Handle non-existent blog posts
  document.getElementById("blog-title").innerText = "Blog Not Found";
  document.getElementById("blog-image").style.display = "none";
  document.getElementById("blog-content").innerHTML = "<p>The blog post you're looking for doesn't exist.</p>";
}

// Update Recent Blogs in Sidebar
const recentBlogsContainer = document.getElementById("recent-blogs");
let recentBlogsHTML = "";

Object.keys(blogPosts).forEach(key => {
  recentBlogsHTML += `
    <div class="block-21 mb-4 d-flex">
      <a href="single.html?post=${key}" class="blog-img mr-4" style="background-image: url(${blogPosts[key].image});"></a>
      <div class="text">
        <h3 class="heading"><a href="single.html?post=${key}">${blogPosts[key].title}</a></h3>
        <div class="meta">
          <div><a href="#"><span class="icon-calendar"></span> ${blogPosts[key].author.date}</a></div>
          <div><a href="#"><span class="icon-person"></span> ${blogPosts[key].author.name}</a></div>
        </div>
      </div>
    </div>
  `;
});
recentBlogsContainer.innerHTML = recentBlogsHTML;
