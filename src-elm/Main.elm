module Main exposing (main)


import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Pangram
import Utils.Html exposing (defaultValue, role, ariaLabel)


-- MAIN

main =
  Browser.sandbox
    { init = init
    , update = update
    , view = view
    }


-- MODEL

type alias Model =
  { alphabet : Pangram.Alphabet
  , sentence : Pangram.Sentence
  , validation : Pangram.Validation
  }


init : Model
init =
  { alphabet = Pangram.defaultAlphabet
  , sentence = Pangram.defaultSentence
  , validation = Pangram.validate Pangram.defaultAlphabet Pangram.defaultSentence
  }


-- UPDATE

type Msg
  = UpdateAlphabet String
  | UpdateSentence String
  | ValidatePangram


update : Msg -> Model -> Model
update msg model =
  case msg of
    UpdateAlphabet newAlphabet ->
      { model | alphabet = Pangram.parseAlphabet newAlphabet }

    UpdateSentence newSentence ->
      { model | sentence = newSentence }
      
    ValidatePangram ->
      let
        validate = Pangram.validate model.alphabet
      in
      { model | validation = validate model.sentence }


-- VIEW

view : Model -> Html Msg
view model =
  div [ id "pangram-checker", class "pc-structure" ]
    [ div [ class "pc-structure--header" ]
        [ viewHeader
        ]
    , div [ class "pc-structure--body" ]
        [ viewMain model
        , viewFooter
        ]
    ]

viewHeader : Html any
viewHeader =
  header [ class "pc-header" ]
    [ span [ class "pc-header--title" ] [ text "Pangram Checker" ]
    ]

viewMain : Model -> Html Msg
viewMain model =
  main_ [ class "pc-main" ]
    [ section [ class "pc-main--section" ]
        [ viewAlphabetInput model.alphabet
        , viewSentenceInput model.sentence
        ]
    , section [ class "pc-main--section" ]
        [ viewValidation model.validation
        , input [ type_ "button", onClick ValidatePangram, value "Validate"] []
        ]
    ]

viewFooter : Html any
viewFooter =
  footer [ class "pc-footer" ]
    [ span [ class "pc-footer--credits" ]
        [ text "Made by"
        , space
        , viewNewTabLink "https://virgulilla.com" [ text "@RoboePi" ]
        , space
        , viewEmoji "\u{1F989}" "Owl"
        ]
    , span [ class "pc-footer--license" ]
        [ viewNewTabLink "https://github.com/Roboe/pangrama" [ text "Source" ]
        , space
        , text "(GPLv3)"
        ]
    ]


-- INPUT VIEWS

viewAlphabetInput : Pangram.Alphabet -> Html Msg
viewAlphabetInput = viewInput "alphabet-input" UpdateAlphabet "Alphabet" << String.fromList

viewSentenceInput : Pangram.Sentence -> Html Msg
viewSentenceInput = viewInput "pangram-input" UpdateSentence "Pangram"
    
viewInput : String -> (String -> Msg) -> String -> String -> Html Msg
viewInput inputId handleInput labelText defaultText =
  div [class "pc-text-field"]
    [ input
        [ type_ "text"
        , id inputId
        , class "pc-text-field--input"
        , defaultValue defaultText
        , onInput handleInput
        ]
        []
    , label [ for inputId, class "pc-text-field--label" ]
        [ text labelText ]
    ]


-- OUTPUT VIEWS

viewValidation : Pangram.Validation -> Html any
viewValidation validation =
  ul [ class "pc-counters-list" ]
    <| List.map viewLetterCounter validation

getValidationClass number =
      case number of
        0 -> "pc-letter-counter_fail"
        _ -> "pc-letter-counter_pass"

viewLetterCounter : Pangram.CountedLetter -> Html any
viewLetterCounter (letter, occurrences) =
  li
    [ class "pc-counters-list--item"
    , class "pc-letter-counter"
    , class <| getValidationClass occurrences
    ]
    [ span [ class "pc-letter-counter--character" ]
        [ text <| String.fromChar letter ]
    , span [ class "pc-letter-counter--number" ]
        [ text <| String.fromInt occurrences ]
    ]


-- PRESENTATIONAL VIEWS

viewNewTabLink : String -> List (Html any) -> Html any
viewNewTabLink url children =
  a [ href url, target "_blank", rel "noopener noreferrer" ]
    children

viewEmoji : String -> String -> Html any
viewEmoji emoji label =
  -- https://stackoverflow.com/questions/33971362/how-can-i-get-special-characters-using-elm-html-module
  span [ class "emoji", role "img", ariaLabel label ]
    [ text emoji ]

space : Html any
space =
  text " "
