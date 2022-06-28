export interface User {
    id: number;
    identifier: string;
    name: string;
    photoUrl?: any;
}
export interface Product {
    id: number;
    title: string;
    releaseDate?: string;
    boxOffice: string;
    duration: number;
    overview?: string;
    coverUrl?: string;
    trailerUrl?: string;
    directedBy?: string;
    phase?: number;
    saga?: string;
    chronology?: number;
    postCreditScenes?: number;
    imdbId?: string;
}
