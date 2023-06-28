import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import uniqid from "uniqid";
import Cv from "../Cv";
import CvList from "../CvList";

export default function App() {
    const [list, setList] = useState([
        {
            id: uniqid(),
            generalInfo: {
                firstName: "John",
                lastName: "Doe",
                email: "123@gmail.com",
                phone: "123456789",
            },
            educationalExperience: [
                {
                    schoolName: "School",
                    titleOfStudy: "Title of study",
                    dateOfStudy: "Date of study",
                },
            ],
            practicalExperience: [
                {
                    companyName: "Company",
                    positionTitle: "Position",
                    mainTasks: "Main tasks",
                    dateFrom: "Date from",
                    dateTo: "Date to",
                },
            ],
            skills: ["Skill"],
        },
    ]);

    function addToList(cv) {
        setList([...list, { id: uniqid(), ...cv }]);
    }

    function editCv(id, newCv) {
        const newList = list.map((item) => {
            if (item.id === id) {
                return { ...item, ...newCv };
            }
            return item;
        });
        setList(newList);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cv-application" element={<Navigate to="/cv-application/new" />} />
                <Route path="/cv-application/new" element={<Cv listLength={list.length} onSave={addToList} />} />
                <Route path="/cv-application/edit/:id" element={<Cv listLength={list.length} onSave={editCv} />} />
                <Route path="/cv-application/list" element={<CvList list={list} />} />
            </Routes>
        </BrowserRouter>
    );
}
