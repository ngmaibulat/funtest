import { jest, describe, expect, test } from "@jest/globals";
import request from "supertest";

export function stdChecks(response: request.Response) {
    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(response.redirect).toBe(false);
}

export function checkArray(response: request.Response) {
    expect(Array.isArray(response.body)).toBe(true);
}

export function checkProps(response: request.Response, props: string[]) {
    if (Array.isArray(response.body)) {
        for (const prop of props) {
            expect(response.body[0]).toHaveProperty(prop);
        }
    } else {
        for (const prop of props) {
            expect(response.body).toHaveProperty(prop);
        }
    }
}
