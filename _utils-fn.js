const genName = () => Math.random().toString(16);

const mbSwap = (v1, v2) => v1 ? v1 : v2;

module.exports = {
    genName,
    mbSwap
}