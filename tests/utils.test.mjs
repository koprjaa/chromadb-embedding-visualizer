import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { cn } = require("../src/lib/utils.ts");

describe("cn()", () => {
  it("merges tailwind classes", () => {
    assert.equal(cn("px-2", "px-4"), "px-4");
  });

  it("handles conditional classes", () => {
    assert.match(cn("foo", false && "bar", "baz"), /foo/);
    assert.match(cn("foo", false && "bar", "baz"), /baz/);
  });
});
