module Utils.List exposing (..)

import List


appendIfMissing : any -> List any -> List any
appendIfMissing element list =
  -- O(log n)
  if List.member element list then
    list
  else
    element :: list

deduplicate : List any -> List any
deduplicate =  List.foldr appendIfMissing []
