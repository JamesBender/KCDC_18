export class TicTacToe {
    constructor() {
        this.board = [[' '], [], []];
    };

    addToken(x, y, token) {
        this.board[x][y] = token;
    };

    getWinner() {
        return this.board[0][0];
    };
};
