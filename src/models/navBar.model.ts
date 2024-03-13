export type NavBarType = {
    heading: string;
    addOn: string[];
    navLinks: string[];
}

export const navBarObject: NavBarType = {
    heading: 'Ticketing Help Desk Service -',
    addOn: ['Incidents', 'Create New Ticket', 'Edit Ticket', 'Details'],
    navLinks: ['/', '/create-new-ticket', '/edit-ticket', '/details']
}