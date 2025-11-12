# 🤝 Contributing to Handpicked

Thank you for considering contributing to **Handpicked**! 💛
This project thrives on the amazing contributions from the community — whether it’s sharing new resources, fixing bugs, or improving the site.

Our goal is simple:

> To make it effortless for developers and designers to find **handpicked, high-quality frontend resources** without wasting hours searching.

---

## 🧩 Ways to Contribute

There are many ways you can help improve Handpicked:

- 💡 **Add new resources** (tools, design kits, libraries, tutorials, etc.)
- 🐛 **Report bugs** or propose new features
- 🧹 **Improve UI/UX** or enhance code readability
- 📚 **Improve documentation** (README, guide pages, etc.)
- 🌍 **Spread the word** — share Handpicked with others

---

## 🪜 Getting Started

1. **Fork** the repository
2. **Clone** your fork locally

   ```
   git clone https://github.com/<your-username>/handpicked.git
   cd handpicked
   ```

3. **Create a new branch**

   ```
   git checkout -b feature/add-new-resource
   ```

4. **Install dependencies**

   ```
   npm install
   ```

5. **Run the project locally**

   ```
   npm run dev
   ```

6. **Make your changes**, then commit:

   ```
   git commit -m "add: new resource [Resource Name or Type]"
   ```

7. **Push your branch**:

   ```
   git push origin feature/add-new-resource
   ```

8. **Open a Pull Request (PR)** from your fork to the`main` branch of this repo.

---

## 🧠 Adding a New Resource

If you’re contributing a new resource (like a tool, library, or course):

- Go to the `/src/data/resources.js`
- Add your entry following the existing structure:

  ```js
  {
  name: "Tool or Resource Name",
  description: "A brief, clear description of what it does.",
  category: "UI Library | Design Tool | Learning | Productivity | Other",
  link: "https://example.com"
  }
  ```

✅ **Keep descriptions short and objective**<br>
✅ **Use credible, official links**<br>
✅ **Avoid duplicates** (search first!)

---

## 🧩 Code Guidelines

To keep things clean and consistent:

- Follow **ESLint** and **Prettier** rules (auto-run on save)
- Use meaningful variable and component names
- Write **self-explanatory commit messages**
- Keep PRs focused — one feature or fix per PR

Example commit messages:

  ```
  add: new CSS animation library to UI tools
  fix: responsive layout issue on home page
  docs: improved setup instructions
  ```

---

## 🔍 Reviewing & Merging

All pull requests are reviewed by maintainers or contributors with write access.

### PRs will be approved faster if they:

- Include clear descriptions of what was changed and why
- Follow the project’s structure and naming conventions
- Pass lint and build checks
- Add or improve documentation where relevant

---

## 🧑‍💻 Contributor Recognition

Your contributions matter!
Every approved contributor will be featured on the **Contributors** section of the repository and acknowledged in release notes (when applicable).

---

## 🧭 Code of Conduct

Please be respectful, patient, and kind to others.
We value diversity and inclusivity — everyone is welcome here.

---

## 🪄 Thank You

Building a curated community takes time and teamwork.
Your contribution — no matter how small — helps make **Handpicked** better for everyone. 💛

> “Great things are done by a series of small things brought together.” — Vincent Van Gogh

---

**Made with ❤️ by [Abhay Mourya](https://github.com/mouryaabhay) and the open-source community.**
