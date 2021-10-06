export interface User {
    name: string;
    phone: string;
    email: string;
    password: string;
    gender_id: string;
    reg_date: string;
    birth_date: string;
    state: string;
    member_rankpoints: number;
    is_active: boolean;
}
export interface Gender {
    id:string;
    name:string;
}