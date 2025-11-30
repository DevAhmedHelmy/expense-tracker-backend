const crypto = require("crypto");

function generateUUID(title = null) {
  const timestamp = Date.now().toString();
  let baseString = (title) ? `${title}-${timestamp}-${Math.random()}` : `${timestamp}-${Math.random()}`;
  // Hash to fixed-length unique ID
  const uuid = crypto
    .createHash("sha256")
    .update(baseString)
    .digest("hex")
    .slice(0, 16);

  return uuid;
}

module.exports = { generateUUID };
