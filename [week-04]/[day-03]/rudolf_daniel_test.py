import unittest
from random import randint
from rudolf_daniel_work import *

class TestStringMethods(unittest.TestCase):

    def test_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), "apple")

    def test_summa(self):
        list_of_numbers = Sum()
        self.assertEqual(list_of_numbers.summa([]), 0)
        self.assertEqual(list_of_numbers.summa([5]), 5)
        self.assertEqual(list_of_numbers.summa([11, 22, 33]), 66)
        self.assertEqual(list_of_numbers.summa([0]), 0)

    def test_anagram(self):
        anagram = Anagram()
        self.assertEqual(anagram.is_anagram("nana", "anna"), True or False)

    def test_countletters(self):
        dictionary = CountLetters()
        self.assertEqual(dictionary.dictionary_maker("letter"), {"l":1, "e":2, "t":2, "r":1})

    def test_fibonacci(self):
        fibo = Fibonacci()
        self.assertEqual(fibo.fibonacci(8), 21)
    
    def test_sharpie(self):
        pen = Sharpie("red", 120)
        self.assertEqual(pen.width, 120)
        self.assertEqual(pen.color, "red")

    def test_animal(self):
        lion = Animal()
        self.assertEqual(lion.hunger, 50)

if __name__ == '__main__':
    unittest.main()