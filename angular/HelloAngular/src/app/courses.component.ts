
//@auther Ashok Kumar Jha

import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', 
    template : `<h2 align ="center">{{title}} </h2>
                <h5> Boards: {{getBoards()}}</h5> 
                <table>
                    <tr>
                        <th>Classes</th>
                        <th>IT</th>
                    </tr>
                    <tr>
                        <td>
                            <ol>
                                <li *ngFor = "let da of getClasses()" > {{"Class-"+da}}
                                    <ol type="I">
                                        <li *ngFor = "let sb of getSubjects()" > {{"Subject - "+sb}}
                                        </li> 
                                    </ol>        
                                </li> 
                            </ol> 
                        </td> 
                        <td>
                        <ol type="I">
                            <li *ngFor = "let it of getItKb()" > {{" "+it}}
                        </li></ol>
                        </td>
                    </tr>
                </table>
            `  
})
export class CoursesComponent {
    public title = "List of Courses";

    private srv:CoursesService; 
    constructor(){
        this.srv = new CoursesService();

    }
    getSubjects() {
        return this.srv.getSubjects();
    }
    getClasses() {
        return this.srv.getClasses();
    }
   
    getItKb() {
        return this.srv.getItKb();
    }  

    getBoards() {
        return this.srv.getBoards();
    }      
}