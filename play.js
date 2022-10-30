if (process.argv[2]) {
  require("./advance");
}
process.argv[2] = "00";
require("./dev");
