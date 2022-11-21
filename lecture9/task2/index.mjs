// Створити систему для динамічного повернення розкладу для різних навчальних днів (mon, tue, wed, thu, fri)
// Приклад:
// Понеділок =>
//  - Прикладний мат. аналіз
//  - C++

import readline from 'readline';

const cmd = readline.createInterface(process.stdin, process.stdout);

cmd.question(`Please, enter a day: \n`, async function setDay(day) {
    switch (day) {
        case 'monday':
            const {monday} = await import('./schedule.mjs');
            console.table(monday());
            break;
        case 'tuesday':
            const {tuesday} = await import('./schedule.mjs');
            console.table(tuesday());
            break;
        case 'wednesday':
            const {wednesday} = await import('./schedule.mjs');
            console.table(wednesday());
            break;
        case 'thursday':
            const {thursday} = await import('./schedule.mjs');
            console.table(thursday());
            break;
        case 'friday':
            const {friday} = await import('./schedule.mjs');
            console.table(friday());
            break;
        default:
            throw new Error('Invalid day format');
    }
    cmd.close();
});
