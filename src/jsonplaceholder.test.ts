import { jest, describe, expect, test } from "@jest/globals";
import request from "supertest";
import { stdChecks, checkArray, checkProps } from "./utils.js";
import { user } from "./sample/jsonplaceholder.js";

const url = "https://jsonplaceholder.typicode.com";
const req = request(url);

test("get /users", async () => {
    const response = await req.get("/users");
    stdChecks(response);
    checkArray(response);
    checkProps(response, Object.keys(user));
});
