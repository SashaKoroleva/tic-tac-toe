class TicTacToe {
    constructor() {
      this.curentPlayerSymbol = 'x';
      this.winner = null;
      this.grid = [[null, null, null],
                   [null, null, null],
                   [null, null, null]];
    }

    getCurrentPlayerSymbol() {
      return this.curentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if(this.grid[rowIndex][columnIndex] == null) {
        this.grid[rowIndex][columnIndex] = this.curentPlayerSymbol;
        if(this.curentPlayerSymbol == 'x') {
          this.curentPlayerSymbol = 'o';
        } else {
          this.curentPlayerSymbol = 'x';
        }
      }
    }

    isFinished() {
      if(this.noMoreTurns() || this.getWinner()) {
        return true;
      } else {
        return false;
      }
    }

    getWinner() {
      var grid = this.grid;

      for(var i=0; i<3; i++) {
        var count = 0;
        for(var j=0; j<3; j++) {
          if(grid[i][i] == grid[i][j]) {
            count++;
          }
        }
        if(count == 3){
          return grid[i][i];
        }
      }

      for(var i=0; i<3; i++) {
        count = 0;
        for(var j=0; j<3; j++) {
          if(grid[i][i] == grid[j][i]) {
            count++;
          }
        }
        if(count == 3){
          return grid[i][i];
        }
      }

      if(grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) {
        return grid[0][0];
      }
      if(grid[2][0] == grid[1][1] && grid[0][2] == grid[1][1]) {
        return grid[1][1];
      }
      return null;
    }

    noMoreTurns() {
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.grid[i][j] == null) {
            return false;
          }
        }
      }
      return true;
    }

    isDraw() {
      if(!this.getWinner() && this.noMoreTurns()) {
        return true;
      } else {
        return false;
      }
    }

    getFieldValue(rowIndex, colIndex) {
      return this.grid[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
