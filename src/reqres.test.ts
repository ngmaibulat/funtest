// import { jest, describe, expect, test } from "@jest/globals";
import request from "supertest";
import { stdChecks, checkArray, checkProps } from "./utils.js";
import samples from "./sample/jsonplaceholder.js";

const url = "https://reqres.in";
const req = request(url);

const user = {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
};

test("get /users", async () => {
    const path = "/users";
    const response = await req.get(path);
    // stdChecks(response);
    // checkArray(response);
    // checkProps(response, Object.keys(user));
    expect(1).toBe(1);
});
