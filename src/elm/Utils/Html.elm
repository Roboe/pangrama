module Utils.Html exposing (..)

import Html
import Html.Attributes exposing (attribute, property)
import Json.Encode


-- INPUT PROPERTIES

defaultValue : String -> Html.Attribute any
defaultValue = property "defaultValue" << Json.Encode.string


-- ACCESIBILITY ATTRIBUTES

role : String -> Html.Attribute any
role = attribute "role"
  
ariaLabel : String -> Html.Attribute any
ariaLabel = attribute "aria-label"
