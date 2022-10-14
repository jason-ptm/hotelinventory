export interface Room {
    id: number;
    roomType: string;
    amenities: string;
    checkOut: Date;
    checkIn: Date;
    price: number;
    photos: Array<string>;
    rating: number;
}