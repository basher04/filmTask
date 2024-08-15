export interface Film {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface FilmCardProps {
    film: Film;
}
declare interface FilmDetails {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    description: string;
    synopsis: string;
    releaseDate: string;
}
export interface FilmDetailsProps {
    film: FilmDetails | null;
}