export interface MenuItem {
    titre: string;
    route: string;
    icone: string;
    habilitations?: string[];
}

export interface MenuListe {
    titre: string;
    icone: string;
    items: MenuItem[];
}

export const estAutorise = (item: MenuItem, roles: string[]) => {
    if (!item.habilitations || !item.habilitations.length || !roles.length) {
        return true;
    }

    if (item.habilitations.indexOf("Administrateur") === -1) {
        item.habilitations.push("Administrateur");
    }

    return item.habilitations.some(_ => roles.some(r => r === _));
};
