//@author: Ashok Kumar Jha

export class CoursesService {
    // In this we call external service to decouple the calculation main
    // component classs

    private subjects = ["Computer Science","Mathematics"];
    private classes = ["IX", "X", "XI-XII", "GRADUATION"];
    private boards = ["CBSE","ICSE","WB", "ISC","Any"]
    private itKb = ["UNIX","Window","Linux","JAVA","JavaScrit","HTML", "CSS","Python","C","C++","SQL","R","TABLEAU","JSX","JSP","docx","XLSX","pptx","......"]

    getSubjects() {
        return this.subjects;
    }
    getClasses() {
        return this.classes;
    }

    getItKb() {
        return this.itKb;
    }

    getBoards() {
        return this.boards;
    }
}