import { IVideo } from "../interfaces/IVideo";

export class Video implements IVideo {
    filepath: string;
    moveTimestamps: number[];
    numberOfTry: number;
    nameClimber: string;
    date: Date;

    constructor(filepath: string, moveTimestamps: number[], numberOfTry: number, nameClimber: string) {
        this.filepath = filepath;
        this.moveTimestamps = moveTimestamps;
        this.numberOfTry = numberOfTry;
        this.nameClimber = nameClimber;
        this.date = new Date();
    }
}