<h1 align="center">🌟 My Portfolio 🌟</h1>

<h2>🚀 Introduction</h2>
<p>Welcome to my personal portfolio! This project showcases my skills, projects, and achievements with a clean and interactive UI. It includes sections for <strong>About Me, Resume, Skills, Projects, Blog, and Contact</strong>, ensuring a professional and engaging experience.</p>

<p><strong>🚀 Check out my portfolio showcase on YouTube:</strong>  
   <strong>📽️<a href="https://www.youtube.com/watch?v=TKUFFRtgmvg" target="_blank"> Portfolio Website Showcase</a></strong>  
</p>

<h2>📂 Project Structure</h2>
<pre>
My_Portfolio/
│── css/           # Stylesheets (Bootstrap, Custom CSS, Animations)
│── fonts/         # Font files used in the project
│── images/        # Project images and assets
│── js/            # JavaScript files for interactivity
│── lib/           # External libraries (jQuery, FontAwesome, etc.)
│── scss/          # SCSS files for styling
│── index.html     # Main landing page
│── single.html    # Blog post template page
│── blog.js        # Blog functionality script
│── prepros-6.config # Configuration file for pre-processing
</pre>

<h2>🌟 Features</h2>
<ul>
  <li>✅ Fully Responsive Design 📱💻</li>
  <li>✅ Modern and Interactive UI ✨</li>
  <li>✅ Smooth Scrolling Navigation 🔽</li>
  <li>✅ Blog Section with Single Post View 📝</li>
  <li>✅ Comment System with Delete Feature 💬</li>
  <li>✅ SEO Optimized with Meta Tags 🔍</li>
  <li>✅ Lightweight and Fast Performance ⚡</li>
</ul>

<h2>🎨 Technologies Used</h2>
<ul>
  <li><strong>HTML5</strong> - Markup structure</li>
  <li><strong>CSS3 & SCSS</strong> - Styling & animations</li>
  <li><strong>JavaScript (ES6+)</strong> - Interactivity</li>
  <li><strong>Bootstrap 5</strong> - Responsive framework</li>
  <li><strong>jQuery</strong> - Additional scripting</li>
  <li><strong>FontAwesome</strong> - Icons</li>
  <li><strong>Google Fonts</strong> - Typography</li>
</ul>

<h2>🏗 Installation & Setup</h2>
<h3>🔹 Clone the Repository</h3>
<pre>
git clone https://github.com/Mehedi-86/My_Portfolio.git
cd My_Portfolio
</pre>

<h3>🔹 Open in Browser</h3>
<p>Simply open <code>index.html</code> in your browser or use a local server:</p>
<pre>
live-server
</pre>

<h3>🔹 Install Dependencies (If Required)</h3>
<p>If using SCSS, compile it using:</p>
<pre>
npm install -g sass
sass --watch scss:css
</pre>

---

<h2>📌 Pages & Sections</h2>

<h3>🔷 <code>index.html</code> - Main Page</h3>
<p>The <strong>landing page</strong> that provides an overview of my portfolio. It includes:</p>
<ul>
  <li>🏠 Hero Section - Introduction</li>
  <li>👨‍💻 About Me - Summary of my experience</li>
  <li>📄 Resume - Download link to my CV</li>
  <li>💡 Skills - Technologies & expertise</li>
  <li>📂 Projects - Showcasing my work</li>
  <li>📝 Blog - Preview of recent blog posts</li>
  <li>📧 Contact Form - Users can reach out to me</li>
</ul>

<h3>🔷 <code>single.html</code> - Blog Post Page</h3>
<p>This page dynamically loads a full blog post using JavaScript.</p>
<ul>
  <li>📰 Displays the full blog content</li>
  <li>👨‍🏫 Author information & date</li>
  <li>🔖 Tags & categories</li>
  <li>💬 Comment section with posting & deletion feature</li>
  <li>📌 Sidebar for recent blogs and tag cloud</li>
</ul>

---

<h2>📜 Blog Functionality (<code>blog.js</code>)</h2>

<h3>🔹 How <code>blog.js</code> Works</h3>
<p>The <code>blog.js</code> file handles all blog-related functionalities dynamically.</p>

<h3>🔹 Features</h3>
<ul>
  <li>✅ Dynamically loads blog content from an object.</li>
  <li>✅ Supports multiple blog posts with unique IDs.</li>
  <li>✅ Comment system with the ability to delete comments.</li>
  <li>✅ Generates recent blog posts and tag clouds dynamically.</li>
  <li>✅ Search functionality to filter blog posts.</li>
</ul>

<h3>🔹 Code Flow</h3>
<ol>
  <li><strong>Extracts Blog ID</strong>: Reads the <code>?post=1</code> parameter from the URL.</li>
  <li><strong>Fetches Blog Data</strong>: Retrieves the corresponding blog post from a predefined object.</li>
  <li><strong>Displays Blog Content</strong>: Updates the <code>single.html</code> page dynamically.</li>
  <li><strong>Manages Comments</strong>: Allows users to add and delete comments.</li>
  <li><strong>Updates Sidebar</strong>: Shows recent blogs, categories, and tag clouds.</li>
</ol>

<h3>🔹 Comment System</h3>
<ul>
  <li>💬 Users can submit comments using a form.</li>
  <li>🗑️ Comments can be deleted by clicking the delete button.</li>
  <li>📌 Comments are stored dynamically and do not persist on page reload.</li>
</ul>

<h3>📌 Future Enhancements for Blog</h3>
<ul>
  <li>✅ Backend Integration (Database storage for blog posts & comments)</li>
  <li>✅ Category-based blog filtering</li>
  <li>✅ Improved SEO with meta descriptions</li>
</ul>

---

<h2>🚀 Deployment</h2>
<p>To deploy your portfolio online, use:</p>
<ul>
  <li><strong>GitHub Pages</strong></li>
  <li><strong>Vercel</strong></li>
  <li><strong>Netlify</strong></li>
  <li><strong>Firebase Hosting</strong></li>
</ul>

---

<h2>📜 License</h2>
<p>This project is licensed under the <strong>MIT License</strong>. You are free to use, modify, and distribute it. However, giving credit is appreciated! 😃</p>

---

<h2>🎯 Conclusion</h2>
<p>This portfolio is designed to be <strong>interactive, user-friendly, and professional</strong>. It highlights my skills in <strong>web development, UI design, and project management</strong>. The blog system adds an engaging aspect, allowing me to share insights and experiences.</p>



