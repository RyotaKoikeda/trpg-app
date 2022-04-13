export const DELETE_CHARAS = "DELETE_CHARAS";
export const deleteCharasAction = (charas) => {
  return {
    type: "DELETE_CHARAS",
    payload: charas,
  };
};

export const FETCH_CHARAS = "FETCH_CHARAS";
export const fetchCharasAction = (charas) => {
  return {
    type: "FETCH_CHARAS",
    payload: charas,
  };
};
