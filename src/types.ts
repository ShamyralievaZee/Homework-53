import * as React from 'react';

export interface  IForm {
    currentTask:string;
    setCurrentTask:(task:string) => void;
    addTask:(e:React.FormEvent) => void;
}