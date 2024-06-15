"use client";

import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import { useCallback, useState } from "react";
import Header from "@/app/(common)/header";

// import { Checkbox } from "@mui/material";
import CheckBox from "../(common)/check-box";
import { randomInt } from "crypto";

interface Todo {
    id: number;
    title: string;
    description?: string;
    createdAt: Dayjs;
    dueDate?: Dayjs;
    isDone: boolean;
}

const initialTodos: Todo[] = [
    {
        id: 1,
        title: "Test",
        description: "This is First Test",
        createdAt: dayjs(),
        dueDate: dayjs(),
        isDone: false,
    },
];

export default function Home() {
    const [selectedDate, setSelectedDate] = useState("");
    const [category, setCategory] = useState<string>("Work");
    const [todos, setTodos] = useState(initialTodos);
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const onAdd = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            console.log(`newTodo Title: ${newTodoTitle}`);
            const newTodo: Todo = {
                id: randomInt(10000),
                title: newTodoTitle,
                createdAt: dayjs(),
                dueDate: dayjs(),
                isDone: false,
            };
            setNewTodoTitle("");
            setTodos(prevState => [...prevState, newTodo]);
        },
        [newTodoTitle]
    );

    const onClick = useCallback(
        (id: number) => () => {
            console.log(`onClick tapped`);
            setTodos(todos =>
                todos.map(todo => {
                    return id === todo.id
                        ? { ...todo, isDone: !todo.isDone }
                        : todo;
                })
            );
        },
        []
    );

    return (
        <main className="relative h-full bg-background flex flex-col overflow-hidden">
            <div className="flex-1 flex flex-row m-2 p-[32px] justify-between bg-gray-700 gap-[20px]">
                {/* Today's List */}
                <div className="w-full flex flex-col bg-gray-500 p-[12px]">
                    <div>
                        <Header category={category} />
                    </div>
                    <div className="mt-[20px] w-full bg-gray-400">
                        {/* TODO LIST */}
                        <div className="flex flex-col gap-[4px]">
                            {todos.map(todo => {
                                return (
                                    <div
                                        className="flex flex-row items-center"
                                        key={todo.id}
                                    >
                                        <CheckBox
                                            isDone={todo.isDone}
                                            onClick={onClick(todo.id)}
                                        />
                                        <span className="ml-[10px]">
                                            {todo.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* NEW TODO */}
                        <div className="mt-[12px] w-full">
                            <form action="submit" className="" onSubmit={onAdd}>
                                <label htmlFor="title"></label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={newTodoTitle}
                                    onChange={e =>
                                        setNewTodoTitle(e.target.value)
                                    }
                                    placeholder="what do you want to do today ? "
                                    className="w-full text-red-500"
                                />

                                <button type="submit" className="mt-[4px]">
                                    ADD
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Calendar */}
                <div className="p-[12px] w-[400px] h-[400px] bg-gray-400">
                    Calendar
                </div>
            </div>
        </main>
    );
}
