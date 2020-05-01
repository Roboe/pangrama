module Pangram exposing (..)

import Utils.String


-- type Pangram alias { alphabet Alphabet, sentence Sentence, validation Validation }

type alias Alphabet = List Char

type alias Sentence = String

type alias Validation = List CountedLetter

type alias CountedLetter =
  ( Char
  , Int
  )


-- DEFAULTS

defaultAlphabet : Alphabet
defaultAlphabet = String.toList "aábcdeéfghiíjklmnñoópqrstuúüvwxyz"
 
defaultSentence : Sentence
defaultSentence = "El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia existiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky."


-- SANITIZATION

parseAlphabet : String -> Alphabet
parseAlphabet = Utils.String.deduplicate << String.toLower << String.trim

prepareSentence : String -> Sentence
prepareSentence = String.toLower << String.trim


-- ACTIONS

compareCountedLetters : CountedLetter -> CountedLetter -> Order
compareCountedLetters (_, ocurrencesA) (_, ocurrencesB) =
  case (ocurrencesA, ocurrencesB) of
    (0, 0) -> EQ
    (0, _) -> LT
    (_, 0) -> GT
    _ -> EQ

sortValidation : Validation -> Validation
sortValidation validation =
  List.sortWith compareCountedLetters validation


countLetterIn : String -> Char -> CountedLetter
countLetterIn sentence letter =
  ( letter
  , Utils.String.countOccurrencesOf letter sentence
  )

validate : Alphabet -> Sentence -> Validation
validate alphabet sentence =
  let
    cleanedSentence = prepareSentence sentence
  in
  List.map (countLetterIn cleanedSentence) alphabet
