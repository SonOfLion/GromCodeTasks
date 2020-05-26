'use strict';

export const event = {
    guests: [
        { name: "Tom", email: "t@gmail.com", age: 17 },
        { name: "John", email: "j@gmail.com", age: 18 },
    ],
    message: "Welcome to the party!",
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email,
                message: `Dear ${name}! ${this.message}`,

            }));
    },
}

// console.log(event.getInvitations());