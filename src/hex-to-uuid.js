/**
{
  "api": 1,
  "name": "Hex to UUID",
  "description": "Convert plain hex string to UUID format",
  "author": "tkindy",
  "icon": "metamorphose",
  "tags": "hex,uuid"
}
**/

const hexCharPattern = /[0-9a-f]/g;

function isValidHex(hex) {
  return hex.length === 32 && hex.replaceAll(hexCharPattern, "") === "";
}

function main(state) {
  const hex = state.text.toLowerCase();

  if (!isValidHex(hex)) {
    state.postError("Invalid hex string");
    return;
  }

  const uuid =
    hex.slice(0, 8) +
    "-" +
    hex.slice(8, 12) +
    "-" +
    hex.slice(12, 16) +
    "-" +
    hex.slice(16, 20) +
    "-" +
    hex.slice(20, 32);

  state.text = uuid;
}
