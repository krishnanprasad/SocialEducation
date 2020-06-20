import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class addquestionpaperpostservice {

    constructor(private http: HttpClient) {

    }
    addQuestionPaper(questionpaper): Observable<any> {
        //
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        return this.http.post("http://localhost:44384/api/socialedu/addquestionpaper",
            questionpaper,
            httpOptions
        );
    }
    // getEMIDetails(userid, chitid, termgroupid): Observable<any> {
    //     return this.http.get("http://edpicker.in/api/Payment/GetEMIPaymentInfo", { params: { "userid": userid, "chitid": chitid, "termgroupid": termgroupid } })
    // }
}
