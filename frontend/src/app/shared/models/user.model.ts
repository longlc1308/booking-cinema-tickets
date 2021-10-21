export interface User {
    name: string;
    phone: string;
    email: string;
    gender_id: string;
    reg_date: string;
    date_of_birth: string;
    state: string;
    member_rankpoints: number;
    is_active: string;
}
export interface Gender {
    id:string;
    name:string;
}