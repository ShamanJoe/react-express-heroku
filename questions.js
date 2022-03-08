interface Question {
    id: number;
    question: string;
    description: string | null;
    //answers: Record<answer, string | null>;
    //multiple_correct_answers: "true" | "false";
    //correct_answers: Record<answer_correct, "true" | "false">;
    explanation: string | null;
    tip: string | null;
    tags: { name: string }[];
    category: string;
    difficulty: "Easy";
}
export function randomQuestion(): Question {
    return Questions[Math.trunc(Math.random() * Questions.length)];
}
export const Questions: Question[] = [
    {
        "id": 1,
        "question": "How to delete a directory in Linux?",
        "description": "delete folder",
        "answers": {
            "answer_a": "ls",
            "answer_b": "delete",
            "answer_c": "remove",
            "answer_d": "rmdir",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": "rmdir deletes an empty directory",
        "tip": null,
        "tags": [],
        "category": "linux",
        "difficulty": "Easy"
    },
    {
        "id": 2,
        "question": "How to delete a directory in Windows?",
        "description": "delete folder",
        "answers": {
            "answer_a": "ls",
            "answer_b": "delete",
            "answer_c": "remove",
            "answer_d": "rmdir",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": "rmdir deletes an empty directory",
        "tip": null,
        "tags": [],
        "category": "linux",
        "difficulty": "Easy"
    }
]