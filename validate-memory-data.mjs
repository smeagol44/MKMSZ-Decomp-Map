import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync("memory-data.js", "utf8"), context);

const data = context.window.MKMSZ_MEMORY_DATA;
if (!data) throw new Error("memory-data.js did not define MKMSZ_MEMORY_DATA");

const classes = new Set([
  "stock-known",
  "stock-unknown",
  "production",
  "confirmed-free",
  "candidate-free",
  "dynamic",
  "proof-only",
  "rejected/conflict",
  "alias/view",
]);

if (!/^[0-9a-f]{40}$/.test(data.sourceCommit)) {
  throw new Error("sourceCommit must be a full Git SHA");
}

const ids = new Set();
for (const key of ["rom", "rdram"]) {
  const space = data[key];
  if (space.grid * space.grid * space.bucketSize !== space.end - space.start) {
    throw new Error(key + ": grid/bucket geometry does not cover the declared space exactly");
  }

  for (const record of space.records) {
    if (ids.has(record.id)) throw new Error("duplicate region_id: " + record.id);
    ids.add(record.id);

    if (!classes.has(record.class)) {
      throw new Error(record.id + ": unknown class " + record.class);
    }
    if (!(record.start >= space.start && record.end <= space.end && record.start < record.end)) {
      throw new Error(record.id + ": interval is outside " + key + " bounds");
    }
    const match = record.range.match(/^\[0x([0-9A-F]+), 0x([0-9A-F]+)\)$/i);
    if (!match ||
        Number.parseInt(match[1], 16) !== record.start ||
        Number.parseInt(match[2], 16) !== record.end) {
      throw new Error(record.id + ": range text does not match numeric bounds");
    }
  }
}

console.log(
  "Memory map validated:",
  data.rom.records.length + " ROM records,",
  data.rdram.records.length + " RDRAM records,",
  "source " + data.sourceCommit.slice(0, 12)
);
