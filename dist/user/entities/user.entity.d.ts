export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    profile_image?: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(name: string, email: string, password: string, profile_image: string);
}
