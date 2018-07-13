import { TicTacToe } from './tic-tac-toe';

describe('When I am playing Tic Tac Toe', () => {

    const ticTacToe = new TicTacToe();

    it('I should have a valid component', () => {        
        expect(ticTacToe).toBeTruthy();    
    });

    describe('And I have an empty board', () => {
        it('then I should not have a winner', () => {
            expect(ticTacToe.getWinner()).toBe(' ');
        });
    });

    describe('When I have a top row that is all X', () => {

        beforeEach(() => {
            ticTacToe.addToken(0, 0, 'X');
            ticTacToe.addToken(0, 1, 'X');
            ticTacToe.addToken(0, 2, 'X');
        });

        it('then X wins', () => {            
            expect(ticTacToe.getWinner()).toBe('X');
        });
        
        it('then Y loses', () => {
            expect(ticTacToe.getWinner()).not.toBe('Y');
        });
    });
});
