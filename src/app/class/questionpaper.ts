import { questionformat } from "./questionformat";
import { ArrayType } from "@angular/compiler";

export class questionpaper {
    public questionHeading: string
    public totalQuestions: string;
    public totalTime: number;
    public questions: Array<questionformat>
    constructor(

    ) {
        this.questionHeading = "",
            this.totalQuestions = "",
            this.totalTime = 0,
            this.questions = new Array<questionformat>()
    }
}
