
"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Plus,} from "lucide-react"

interface Question {
  id: string
  question: string
  answer: string
}

export default function FaqPage() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "q1",
      question: "Question 1",
      answer:
        "This is the answer to question 1. You can expand this section to reveal more details about the question.",
    },
    {
      id: "q2",
      question: "Question 2",
      answer: "This is the answer to question 2. It provides additional information related to the second question.",
    },
    {
      id: "q3",
      question: "Question 3",
      answer: "This is the answer to question 3. Feel free to add more content here for future questions.",
    },
    {
      id: "q4",
      question: "Question 4",
      answer: "This is the answer to question 4. This section is where you will place the detailed response.",
    },
  ])

  const handleAddMore = () => {
    const newId = `q${questions.length + 1}`
    setQuestions([
      ...questions,
      {
        id: newId,
        question: `Question ${questions.length + 1}`,
        answer: `This is the answer to question ${questions.length + 1}.`,
      },
    ])
  }

  const handleEdit = (id: string) => {
    console.log(`Edit question ${id}`)
    // In the future, you can implement a modal or a new page for editing the question and answer.
  }

  const handleDelete = (id: string) => {
    console.log(`Delete question ${id}`)
    setQuestions(questions.filter((q) => q.id !== id))
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 mt-4 rounded-2xl">
      <div className="w-full  space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="flex items-center gap-3">
            <Accordion type="single" collapsible className="flex-grow">
              <AccordionItem
                value={q.id}
                className="border rounded-xl bg-white shadow-sm data-[state=open]:rounded-b-none"
              >
                <AccordionTrigger className="flex justify-between items-center px-4 py-3 text-base font-medium hover:no-underline">
                  <span className="flex-grow text-left">{q.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-gray-600 border-t">{q.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer rounded-full bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800 w-10 h-10 shrink-0"
              onClick={() => handleEdit(q.id)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.675 4.49104C20.1083 4.05777 20.1083 3.33565 19.675 2.92459L17.0754 0.324955C16.6644 -0.108318 15.9422 -0.108318 15.509 0.324955L13.4648 2.35801L17.6309 6.52409M0 15.8339V20H4.16609L16.4533 7.70171L12.2872 3.53562L0 15.8339Z" fill="#009411" />
              </svg>

            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer rounded-full bg-red-100 text-red-700 hover:bg-red-200 hover:text-red-800 w-10 h-10 shrink-0"
              onClick={() => handleDelete(q.id)}
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1.11111H12L10.8571 0H5.14286L4 1.11111H0V3.33333H16M1.14286 17.7778C1.14286 18.3671 1.38367 18.9324 1.81233 19.3491C2.24098 19.7659 2.82236 20 3.42857 20H12.5714C13.1776 20 13.759 19.7659 14.1877 19.3491C14.6163 18.9324 14.8571 18.3671 14.8571 17.7778V4.44444H1.14286V17.7778Z" fill="#EF4444" />
              </svg>

            </Button>
          </div>
        ))}
        <Button
          className="cursor-pointer w-[300px] bg-primary hover:bg-primary hover:opacity-90 text-white rounded-full py-6 text-lg font-semibold shadow-md"
          onClick={handleAddMore}
        >
          <Plus className="mr-2 h-6 w-6" />
          Add more
        </Button>
      </div>
    </div>
  )
}
