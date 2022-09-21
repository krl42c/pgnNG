
export class MoveParser {
    constructor() {

    }
    static getPiecePng(move: string, color: string): string {
        // Rook 
        let extension = ".png";
        if (move.length == 2) {
            return "p" + "_" + color + extension;
        }
        if (move.startsWith("O")) {
            return "castle";
        }

        let piece = move.charAt(0)!.toLowerCase() + "_" + color + extension;
        return piece;
    }
}


export namespace MoveParser {
    enum PieceColor {
        WHITE = "w",
        BLACK = "b"
    }
}