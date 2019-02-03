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
    maxCharges: string;
    cooldown: string;
    desc: string;
    desc2: string;
    addInfo: string;
    unlockLevel: number;
    img: string;
}