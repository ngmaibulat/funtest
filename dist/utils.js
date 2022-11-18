import { expect } from "@jest/globals";
export function stdChecks(response) {
    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(response.redirect).toBe(false);
}
export function checkArray(something) {
    expect(Array.isArray(something)).toBe(true);
}
export function checkProps(response, props) {
    if (Array.isArray(response)) {
        for (const prop of props) {
            expect(response[0]).toHaveProperty(prop);
        }
    }
    else {
        for (const prop of props) {
            expect(response).toHaveProperty(prop);
        }
    }
}
