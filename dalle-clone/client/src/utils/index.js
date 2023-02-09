import { surpriseMePrompts } from "..";
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPromt = surpriseMePrompts[randomIndex];
    if (randomPromt === prompt) {
        return getRandomPrompt(prompt);
    }
    return randomPromt;
}