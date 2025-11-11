import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Taglines with weights
const taglines = [
  { text: "99 little bugs in the code 🐛", weight: 1 },
  { text: "Code doesn't lie, but sometimes it misleads! 🤨", weight: 4 },
  { text: "Debugging: Because who needs sleep anyway? 😴", weight: 7 },
  { text: "Error 404: Motivation not found! 😴", weight: 4 },
  { text: "Fix one bug, create three more... #programminglife 🥴", weight: 4 },
  { text: "Git merge conflicts: The true test of patience! 🧘🏻‍♂️", weight: 4 },
  { text: "Good code is like a good joke, it doesn't need to be explained. 😂", weight: 3 },
  { text: "I spent 4 hours debugging, but I'm not sure what I fixed. 🤷‍♂️", weight: 4 },
  { text: "I write code to solve problems I don't have yet! 🤔", weight: 5 },
  { text: "Infinite loop of: Code ➡ Break ➡ Fix ➡ Repeat 🔁", weight: 1 },
  { text: "It works, But how? Let's not think about it! 🤔", weight: 5 },
  { text: "My code comments are more creative than my GitHub README! UwU", weight: 2 },
  { text: "Naming variables: The real programming challenge! 🤯", weight: 1 },
  { text: "One does not simply write bug-free code 🙅‍♂️", weight: 5 },
  { text: "Programmer's dictionary: Debugging = Google searching 🔍", weight: 3 },
  { text: "Semicolon: The tiny hero that breaks or saves everything!", weight: 2 },
  { text: "What's the best comeback to: Go touch some grass!! 🍀", weight: 1 },
  { text: "When compiler says syntax error for the 100th time 😭", weight: 8 },
  { text: "When your 5-line fix becomes a 500-line adventure 🚀", weight: 4 },
  { text: "When your code finally works after 3 hours of struggle 😵", weight: 1 },
  { text: "Why do programmers prefer dark mode? Because light attracts bugs! 🌙", weight: 3 },
  { text: "Writing code: It's like solving a puzzle with no pieces! 🧩", weight: 3 },
  { text: "Stack Overflow: The real MVP of coding 🏆", weight: 5 },
  { text: "Keyboard warrior: Ctrl+C, Ctrl+V expert 🖱️", weight: 2 },
  { text: "Commit messages: Lies we tell ourselves daily 📝", weight: 3 },
  { text: "Rubber duck debugging: Quack your way to success 🦆", weight: 2 },
  { text: "I turn coffee into code ☕➡💻", weight: 4 },
  { text: "Syntax errors: The universe's way of trolling me 🌌", weight: 5 },
  { text: "Debugging: Removing the needles from the haystack 🧵", weight: 3 },
  { text: "Merge conflicts: Where friendships go to die 💔", weight: 2 },
  { text: "Tabs vs Spaces: The eternal debate 🔥", weight: 3 },
  { text: "Infinite loops are like black holes 🕳️", weight: 1 },
  { text: "Hello World! Still my first love 👶💻", weight: 2 },
  { text: "Keyboard shortcuts > Superpowers ✨", weight: 3 },
  { text: "Sleep is for the weak, code is for the brave 🦸‍♂️", weight: 4 },
  { text: "Programming is 10% typing and 90% googling 🌐", weight: 5 },
  { text: "Refactoring: Turning spaghetti into lasagna 🍝➡🍲", weight: 3 },
  { text: "Console.log: The debugging swiss army knife 🛠️", weight: 6 },
];

function weightedRandomSelect(items) {
  const pool = items.flatMap(item => Array(item.weight).fill(item));
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function RandomZinger() {
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const selected = weightedRandomSelect(taglines);
    setTagline(selected.text);
  }, []);

  return (
    <span className={cn("inline", "sm:inline", "hidden")}>
      {tagline}
    </span>
  );
}