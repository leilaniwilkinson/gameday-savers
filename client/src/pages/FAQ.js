import React from 'react';
import CustomizedDialog from '../components/Dialog';
import QuestionForm from '../components/questionForm';
import '../styles/FAQ.css';
import CategoryForm from '../components/categoryForm';

function FAQ() {
    return (
        <div className="FAQ">
            <div className="left vertical-center">
                <CustomizedDialog title="Check Our FAQ" button_text="Check Our FAQ">
                <CategoryForm />
                </CustomizedDialog>
            </div>
            <div className="right vertical-center">
            <CustomizedDialog title="Send Us A Question" button_text="Ask Question">
                <QuestionForm />
            </CustomizedDialog>
            </div>
        </div>
    )
}

export default FAQ
