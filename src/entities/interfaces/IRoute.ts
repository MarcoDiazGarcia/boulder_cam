import { IVideo } from './IVideo';

export interface IRoute {
    id: string;
    imagePath: string;
    grade: string;
    color: string;
    tries: number;
    lastTried: Date | null;
    videos: IVideo[];

    get name(): string;
    get videoCount(): number;
}
