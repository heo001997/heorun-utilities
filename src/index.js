import * as unique from "uniq";
import { faker } from "@faker-js/faker";
import * as htmlTableToJson from "html-table-to-json";
import * as pluralize from "pluralize";

var arr = [1, 1, 2, 2, 3, 5]
console.log(unique(arr))

console.log(faker.name.fullName());

const jsonTables = htmlTableToJson.parse(`
        <table>
            <tr>
                <th>Animal</th>
                <th>Color</th>
                <th>Name</th>
            </tr>
            <tr>
                <td>Unicorn</td>
                <td>Pink</td>
                <td>Billy</td>
            </tr>
            <tr>
                <td>Walrus</td>
                <td>Orange</td>
                <td>Sue</td>
            </tr>
        </table>
    `);
console.log(jsonTables.results);

var mess = "work achivement"
console.log(mess);
console.log(pluralize(mess));
console.log(pluralize.singular("work achivements"));

console.log(pluralize("history"));
console.log(pluralize.singular("work histories"));
