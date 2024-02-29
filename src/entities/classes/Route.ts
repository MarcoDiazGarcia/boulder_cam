import { IRoute } from "../interfaces/IRoute";
import { IVideo } from "../interfaces/IVideo";
import * as uuid from 'uuid';

export class Route implements IRoute {
    id: string;
    imagePath: string;
    grade: string;
    color: string;
    tries: number;
    lastTried: Date | null;
    videos: IVideo[];
    
    get name() {
        return `${this.color} ${this.grade}`;
    }

    get videoCount() {
        return this.videos.length;
    }

    constructor(imagePath: string, grade: string, color: string) {
        this.id = uuid.v4();;
        this.imagePath = imagePath;
        this.grade = grade;
        this.color = color;
        this.tries = 0;
        this.lastTried = null;
        this.videos = [];
    }

    public addVideo(video: IVideo) {
        this.lastTried = new Date();     
        this.videos.push(video);
    }

}