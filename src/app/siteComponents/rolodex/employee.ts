export interface Employee {
	$key?: string;
	first_name?: string;
	last_name?:string;
	description?: string;
	category: string;
	years_in_business?: number;
	street_address?: string;
	city: string;
	zipcode?: string;
	extension?:string;
	phone?: string;
	email?: string;
	created_at: string;
}
