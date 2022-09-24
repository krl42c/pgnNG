export class MoveParser {
    constructor() {

    }
    static getPiecePng(move: string, color: string): string {
        // Rook 
        let extension = ".png";
        let start = move.charAt(0);
        if (start === start.toLowerCase()) {
            return "p" + "_" + color + extension;
        }
        if (move.startsWith("O")) {
            return "castle";
        }

        let piece = move.charAt(0)!.toLowerCase() + "_" + color + extension;
        return piece;
    }
}