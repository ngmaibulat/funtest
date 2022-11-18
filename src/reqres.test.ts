// import { jest, describe, expect, test } from "@jest/globals";
import request from "supertest";
import { stdChecks, checkArray, checkProps } from "./utils.js";
import samples from "./sample/reqres.js";

const url = "https://reqres.in";
const req = request(url);

test("get /api/users", async () => {
    const path = "/api/users";
    const response = await req.get(path);

    stdChecks(response);
    checkArray(response.body.data);
    checkProps(response.body.data, Object.keys(samples.user));
});
