export class Data {
    slug: string;
    class: string;
    school: string;
    role: string;
    desc: string;
    img: string;
    spells: Array<Spells>
}

export interface Spells {
    key: string;
    name: string;
    max_charges: string;
    cooldown: string;
    desc: string;
    desc2: string;
    add_info: string;
    unlock_level: string;
    img: string;
}