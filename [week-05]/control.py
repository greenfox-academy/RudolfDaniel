from model import *
from view import *

class Map(object):
    def __init__(self):
        self.floor = Tile(0, 0)
        self.wall = Wall(0, 0)
        self.tiles = []
        for j in range(10):
            for i in range(10):
                self.tiles.append(Tile(i * 72, j * 72))
        self.tiles[3] = Wall(3 * 72, 0 * 72)
        self.tiles[5] = Wall(5 * 72, 0 * 72)

        self.tiles[13] = Wall(3 * 72, 1 * 72)
        self.tiles[15] = Wall(5 * 72, 1 * 72)
        self.tiles[17] = Wall(7 * 72, 1 * 72)
        self.tiles[18] = Wall(8 * 72, 1 * 72)

        self.tiles[21] = Wall(1 * 72, 2 * 72)
        self.tiles[22] = Wall(2 * 72, 2 * 72)
        self.tiles[23] = Wall(3 * 72, 2 * 72)
        self.tiles[25] = Wall(5 * 72, 2 * 72)
        self.tiles[27] = Wall(7 * 72, 2 * 72)
        self.tiles[28] = Wall(8 * 72, 2 * 72)

        self.tiles[35] = Wall(5 * 72, 3 * 72)

        self.tiles[40] = Wall(0 * 72, 4 * 72)
        self.tiles[41] = Wall(1 * 72, 4 * 72)
        self.tiles[42] = Wall(2 * 72, 4 * 72)
        self.tiles[43] = Wall(3 * 72, 4 * 72)
        self.tiles[45] = Wall(5 * 72, 4 * 72)
        self.tiles[46] = Wall(6 * 72, 4 * 72)
        self.tiles[47] = Wall(7 * 72, 4 * 72)
        self.tiles[48] = Wall(8 * 72, 4 * 72)

        self.tiles[51] = Wall(1 * 72, 5 * 72)
        self.tiles[53] = Wall(3 * 72, 5 * 72)
        self.tiles[58] = Wall(8 * 72, 5 * 72)

        self.tiles[61] = Wall(1 * 72, 6 * 72)
        self.tiles[63] = Wall(3 * 72, 6 * 72)
        self.tiles[65] = Wall(5 * 72, 6 * 72)
        self.tiles[66] = Wall(6 * 72, 6 * 72)
        self.tiles[68] = Wall(8 * 72, 6 * 72)

        self.tiles[75] = Wall(5 * 72, 7 * 72)
        self.tiles[76] = Wall(6 * 72, 7 * 72)
        self.tiles[78] = Wall(8 * 72, 7 * 72)

        self.tiles[81] = Wall(1 * 72, 8 * 72)
        self.tiles[82] = Wall(2 * 72, 8 * 72)
        self.tiles[83] = Wall(3 * 72, 8 * 72)
        self.tiles[88] = Wall(8 * 72, 8 * 72)

        self.tiles[91] = Wall(1 * 72, 9 * 72)
        self.tiles[93] = Wall(3 * 72, 9 * 72)
        self.tiles[95] = Wall(5 * 72, 9 * 72)

mappa = Map()
drawing = Draw()
dezso = Hero(0, 0, 1, 20, 10, 10)

for i in range(len(mappa.tiles)):
    drawing.drawer(mappa.tiles[i])

drawing.drawer(dezso)

drawing.root.mainloop()