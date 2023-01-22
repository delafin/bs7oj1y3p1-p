type TAlbum = {
    userId: number;
    id: number;
    title: string;
};
type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
type TUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: TAddress;
    phone: string;
    website: string;
    company: TCompany;
};
type TAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: TGeo;
};
type TGeo = {
    lat: string;
    lng: string;
};
type TCompany = {
    name: string;
    catchPhrase: string;
    bs: string;
};
