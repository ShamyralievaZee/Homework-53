import * as React from 'react';

export interface  IForm {
    currentTask:string;
    setCurrentTask:(task:string) => void;
    addTask:(e:React.FormEvent) => void;
}

export interface ITask {
    id: string;
    text: string;
    deleteTask: (id:string) => void;
}