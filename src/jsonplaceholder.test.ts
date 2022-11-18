import { jest, describe, expect, test } from "@jest/globals";
import request from "supertest";
import { stdChecks, checkArray, checkProps } from "./utils.js";
import samples from "./sample/jsonplaceholder.js";

const url = "https://jsonplaceholder.typicode.com";
const req = request(url);

test("get /users", async () => {
    const path = "/users";
    const response = await req.get(path);
    stdChecks(response);
    checkArray(response);
    checkProps(response, Object.keys(samples.user));
});

test("get /posts", async () => {
    const path = "/posts";
    const response = await req.get(path);
    stdChecks(response);
    checkArray(response);
    checkProps(response, Object.keys(samples.post));
});

test("get /comments", async () => {
    const path = "/comments";
    const response = await req.get(path);
    stdChecks(response);
    checkArray(response);
    checkProps(response, Object.keys(samples.comment));
});
