module Utils.String exposing (..)

import Utils.List


deduplicate : String -> List Char
deduplicate = Utils.List.deduplicate << String.toList

countOccurrencesOf : Char -> String -> Int
countOccurrencesOf char string =
  let
    isChar = (==) char
  in
  String.length <| String.filter isChar string 
